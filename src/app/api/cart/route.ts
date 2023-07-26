import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
import Cart from "@/models/cartModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    var ownerId = getDataFromToken(request);
    if (ownerId) {
      var cart = await Cart.findOne({ ownerId: ownerId });
      if (cart) {
        return NextResponse.json({
          message: "Cart Data Retrivied",
          success: true,
          ownerId: ownerId,
          cartItems: cart,
        });
      } else {
        return NextResponse.json({
          message: "Cart Data Retrivied",
          success: true,
          ownerId: ownerId,
          cartItems: [],
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { cartItems } = reqBody;
    var ownerId = getDataFromToken(request);
    var cart = await Cart.findOne({ ownerId: ownerId });
    if (!cart) {
      cart = new Cart({ ownerId: ownerId, cartItems: [cartItems] });
      cart = await cart.save();
    } else {
      cart = await Cart.findOneAndUpdate(
        { ownerId: ownerId },
        { $push: { cartItems: {...cartItems} } },
        { returnOriginal: false }
      );
    }

    return NextResponse.json({
      message: "Cart added",
      success: true,
      ownerId: ownerId,
      cartItems: cartItems,
    });
  } catch (e) {
    console.log(e);
  }
}
