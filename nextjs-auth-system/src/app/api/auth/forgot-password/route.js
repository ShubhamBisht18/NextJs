import { NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/lib/db";
import { generateOTP } from "@/lib/generateOTP";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req) {
    try {
        await connectDB()
        const {email} = await req.json()

        if(!email){
            return NextResponse.json({ message: "Email required" 
            },{ status: 400 });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: "Email not found" 
            },{ status: 404 });
        }

        const resetOtp = generateOTP()
        const resetOtpExpiry = new Date(Date.now() + 5 * 60 * 1000);

        user.resetOtp = resetOtp
        user.resetOtpExpiry = resetOtpExpiry
        await user.save();

        await sendEmail(email,"Reset your password",`Your reset OTP: ${resetOtp}. Expires in 5 minutes.`)

        return NextResponse.json({ message: "Reset OTP sent to email" });

    } 
    catch (error) {
        return NextResponse.json({ message: "Server error" 
        },{ status: 500 });
    }
}