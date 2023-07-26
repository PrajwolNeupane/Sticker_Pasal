import { connect } from "@/dbConfig/dbConfig";
import Cart from "@/models/cartModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { ownerId, cartItems } = reqBody;
    var cart = await Cart.findOne({ ownerId: ownerId });
    console.log(cart);
    if (!cart) {
      cart = new Cart({ ownerId: ownerId, cartItems: cartItems });
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
