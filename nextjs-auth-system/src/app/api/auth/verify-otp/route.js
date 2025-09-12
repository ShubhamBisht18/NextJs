import { NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/lib/db";

export async function POST(req) {
    try {
        await connectDB()

        const { email, otp } = await req.json()

        if (!email || !otp) {
            return NextResponse.json({
                message: "Email & OTP required"
            }, { status: 400 });
        }

        const user = await User.findOne({ email })

        if (user.isVerified) {
            return NextResponse.json({ message: "Already verified" });
        }

        if (!user.otp || user.otp !== otp || user.otpExpiry < new Date()) {
            return NextResponse.json({
                message: "Invalid or expired OTP"
            }, { status: 400 });
        }

        user.isVerified = true,
            user.otp = null,
            user.otpExpiry = null

        await user.save()

        return NextResponse.json({ message: "Account verified" });
    } 
    catch (error) {
        return NextResponse.json({
            message: "Server error"
        }, { status: 500 });
    }
}