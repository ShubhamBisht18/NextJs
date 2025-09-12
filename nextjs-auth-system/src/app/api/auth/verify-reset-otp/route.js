import { NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/lib/db";

export async function POST(req) {
    try {
        await connectDB();
        const {email, otp} = await req.json()
        
        if(!email || !otp){
            return NextResponse.json({ message: "Email & OTP required" 
            },{ status: 400 });
        }

        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({ message: "User not found" 
            },{ status: 404 });
        }

        if(!user.resetOtp || user.resetOtp !== otp || user.resetOtpExpiry < new Date()){
            return NextResponse.json({ message: "Invalid or expired OTP" 
            },{ status: 400 });
        }

        return NextResponse.json({ message: "OTP verified" });
    } 
    catch (error) {
        console.error(err);
        return NextResponse.json({ message: "Server error"   
        },{ status: 500 });
    }
}