import { connect } from "@/dbConfig/dbConfig";
import Order from "@/models/orderModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {

    const reqBody = await request.json();
    const {paymentMethod,paymentToken,name,email,number,address, orderItems } = reqBody;
    var order = new Order({paymentMethod,paymentToken,name,email,number,address,orderItems});
    order = await order.save();
    return NextResponse.json({message:"Order Placed",order});

  } catch (e:any) {
    console.log(e);
    return NextResponse.json({message:"Fail to place Order",error:e.message},{
        status:500
    });
  }
}
