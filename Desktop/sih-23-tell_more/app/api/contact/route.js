 import connectDB from "@/app/lib/mongodb";
import contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req){
    const { files,name,state,terrain,phone,email,side,benefits } = await req.json();
       try{
        await connectDB();
        await contact.create({ name, state, terrain, side, email, phone, message, files,benefits })

        return NextResponse.json({
            msg: ["Message sent successfully"], 
            success: true,
        });
       } catch(error)
       {
        if(error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for(let e in error.errors) {
                errorList.push(e.errors[e].message);

            }
            console.log(errorList);
            return NextResponse.json({
                msg: {errorList}
            });
        }
        else{
            return NextResponse.json({
                msg: ["Sent successfully."]
            });
        }
       }
}