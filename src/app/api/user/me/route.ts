import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";

export async function GET(request: NextRequest) {
  try {
    var token = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.TOEKN_SECRET!);
    var user = await User.findById({ _id: decodedToken.id }).select(
      ["-password","-__v"]
    );

    const response = NextResponse.json({
      message: "User Information Rettivied Successfully",
      success: true,
      user: user,
    });
    
    return response;
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
