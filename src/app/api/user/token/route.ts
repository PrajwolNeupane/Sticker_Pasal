import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    try{
        var token = request.cookies.get('token')?.value;
        if(!token){
            token = '';
        }
        const response = NextResponse.json({
            message:'Token Retivied Successfully',
            token:token,
            success:true
        });
        return response;
    }catch(e:any){
        console.log(e);
        return NextResponse.json({error:e.message},{status:500})
    }
}