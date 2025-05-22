import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async(req:Request)=>{
    const userID = await auth()
    console.log(
        userID
    )
    return NextResponse.json({message:'hello world'})
}