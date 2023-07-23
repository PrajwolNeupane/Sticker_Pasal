import { NextRequest, NextResponse } from "next/server";
import cherrio from "cheerio";
import request from "request-promise";
import { StickerNepalURL } from "@/app/const";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (id) {
      const response = await request({
        uri: `https://stickersnepal.com/details/${id}/`,
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
        gzip: true,
      });
      let $ = cherrio.load(response);

      let image = $('img[class="img-fluid"]').attr("src");
      let name = $('h1[class="mt-3 mb-1 mb-md-2"]').text().trim();
      let price = $('p[class="lead mb-0"]').text().trim();
      let category = $('a[class="reset-anchor ml-2"]').text().trim();

      const descripton: Array<string> = [];

      $(`ul[class="descripton-ul pl-0 text-uppercase"]`)
        .children()
        .each((index, element) => {
          if (descripton.length < 5) {
            descripton.push($(element).text().trim());
          }
        });
      return NextResponse.json({
        product: { id, name, image:`${StickerNepalURL}${image}`, price, category, descripton },
      });
    } else {
      return NextResponse.json(
        { error: "No ID Provided" },
        {
          status: 500,
        }
      );
    }
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
