import { NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/lib/db";
import bcrypt from 'bcryptjs'

export async function POST(req) {
    try {
        await connectDB();
        const {email, otp, newPassword} = await req.json();

        if(!email|| !otp || !newPassword){
            return NextResponse.json({ message: "All fields required" 
            },{ status: 400 });
        }

        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({ message: "User not found" 
            },{ status: 404 });
        }

        if(!user.resetOtp || !user.resetOtp !== otp || user.resetOtpExpiry < new Date()){
            return NextResponse.json({ message: "Invalid or expired OTP" 
            },{ status: 400 });
        }

        user.password = await bcrypt.hash(newPassword,10)
        user.otpExpiry = null
        user.resetOtpExpiry = null

        await user.save()

        return NextResponse.json({ message: "Password reset successful" });
    } 
    catch (error) {
        console.error(err);
        return NextResponse.json({ message: "Server error" 
        },{ status: 500 });
    }
}