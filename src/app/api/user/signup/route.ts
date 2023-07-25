import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password, phonenumber } = reqBody;

    const user = await User.findOne({ email: email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        {
          status: 400,
        }
      );
    }
    //Hash Password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    var newUser = new User({
      name,
      email,
      password: hashedPassword,
      phoneNumber: phonenumber,
    });

    newUser = await newUser.save();

    const tokenData = {
      id: newUser._id,
    };
    const token = jwt.sign(tokenData,process.env.TOEKN_SECRET!,{expiresIn:"1d"});

    const response = NextResponse.json({
      message: "User Created",
      success: true,
      newUser,
    });
    response.cookies.set("token",token,{
      httpOnly:true
  });
    
    return response;
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}
