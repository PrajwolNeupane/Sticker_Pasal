import { NextRequest, NextResponse } from "next/server";
import cherrio from "cheerio";
import request from "request-promise";
import { ProductsType } from "@/app/const/interface";

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
    var products: Array<ProductsType> = [];
    $('div[class="row"]')
      .children()
      .each((_, element) => {
        const name = $(element)
          .find('h5[class="mb-0 text-sm"] > a')
          .text()
          .trim();
        const price = $(element)
          .find('p[class="small text-muted mb-2"]')
          .text()
          .trim();
        const image = $(element).find('img[class="img-fluid"]').attr("src");
        const id = $(element).find('a[class="d-block"]').attr("href");

        if (name && id && price && image) {
          products.push({
            id: id,
            name: name,
            price: price,
            image: `https://stickersnepal.com/${image}`,
          });
        }
      });
    return NextResponse.json({ products: products });
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
