import { NextRequest, NextResponse } from "next/server";
import cherrio from "cheerio";
import request from "request-promise";
import { CategoriesType } from "@/app/const/interface";

export async function GET(req: NextRequest) {
  try {
    const response = await request({
      uri: "https://stickersnepal.com/",
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
      gzip: true,
    });
    let $ = cherrio.load(response);
    var catgories:Array<CategoriesType> = [];
    $('div[class="text-center scroll-item"]')
      .children()
      .each((_, element) => {
        const title = $(element)
          .find('span[class="category-item-title"]')
          .text()
          .trim();
        const image = $(element).find('img[class="img-fluid"]').attr("src");
        if (title) {
          catgories.push({
            name: title,
            image: `https://stickersnepal.com/${image}`,
          });
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
