import { NextRequest, NextResponse } from "next/server";
import cherrio from "cheerio";
import request from "request-promise";
import { StickerNepalURL } from "@/app/const";
import { ProductsType } from "@/app/const/interface";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const page = req.nextUrl.searchParams.get("page");
    if (id) {
      const response = await request({
        uri: `https://stickersnepal.com/shop/${id}/?page=${page}`,
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
        gzip: true,
      });

      let $ = cherrio.load(response);
      var products:Array<ProductsType> = [];            

      $(
        'div[class="col-lg-9 order-1 order-lg-2 mb-1 mb-lg-0"] > div[class="row"]'
      )
        .children()
        .each((indx, element) => {
          const name = $(element)
            .find(
              'h5[class="mb-0 product-name text-sm"] > a[class="reset-anchor"]'
            )
            .text()
            .trim();
          const price = $(element)
            .find('p[class="small text-muted mb-2"]')
            .text()
            .trim();
          const image = $(element).find('img[class="img-fluid"]').attr("src");
          const id = $(element).find('a[class="d-block"]').attr("href");

          if (id) {
            products.push({
              id: id,
              name: name,
              price: price,
              image: `${StickerNepalURL}${image}`,
            });
          }
        });
      return NextResponse.json({
          products
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
