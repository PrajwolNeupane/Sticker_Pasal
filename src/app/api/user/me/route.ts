import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { getDataFromToken } from "@/helper/getDataFromToken";

export async function GET(request: NextRequest) {
  try {
    const id = getDataFromToken(request);
    if (id) {
      var user = await User.findById({ _id: id }).select(["-password", "-__v"]);

      const response = NextResponse.json({
        message: "User Information Rettivied Successfully",
        success: true,
        user: user,
      });
      return response;
    } else {
      const response = NextResponse.json({ message:"No User Login" }, { status: 500 });
      return response;
    }
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
