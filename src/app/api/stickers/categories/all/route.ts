import { NextRequest, NextResponse } from "next/server";
import cherrio from "cheerio";
import request from "request-promise";
import { CategoriesType } from "@/app/const/interface";

export async function GET(req: NextRequest) {
  try {
    const response = await request({
      uri: "https://stickersnepal.com/shop/all/",
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
      gzip: true,
    });
    let $ = cherrio.load(response);
    var catgories: Array<CategoriesType> = [];
    $('ul[class="list-unstyled text-muted pl-lg-4 font-weight-normal"]')
      .children()
      .each((indx, element) => {
        if (indx != 0) {
          const title = $(element)
            .find('a[class="reset-anchor"]')
            .text()
            .trim();
          if (title) {
            catgories.push({
              name: title,
              image: `https://stickersnepal.com/staticfiles/${title}.jpg`,
            });
          }
        }
      });
    return NextResponse.json({ catgories: catgories });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(
      { error: e.message },
      {
        status: 500,
      }
    );
  }
}
