import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { sendEmail } from "@/lib/sendEmail";
import { generateOTP } from "@/lib/generateOTP";

export async function POST(req) {
    try {
        await connectDB();
        const { name, email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json({
                message: "Email and password required"
            }, { status: 400 });
        }

        const existing = await User.findOne({ email })

        if (existing) {
            return NextResponse.json({
                message: "User already exists"
            }, { status: 400 });
        }

        const hashed = await bcrypt.hash(password, 10)
        const otp = generateOTP()
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

        const user = await User.create({
            name: name,
            email,
            password: hashed,
            otp,
            otpExpiry,
            isVerified: false
        })

        await sendEmail(email, "Verify your account", `Your OTP is ${otp}. It expires in 5 minutes.`)

        return NextResponse.json({
            message: "OTP sent to email"
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}