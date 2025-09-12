import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import jwt from 'jsonwebtoken'

export async function GET(req) {
    try {
        await connectDB()
        const token = req.cookies.get('token')?.value

        if (!token) {
            return NextResponse.json({ user: null });
        }

        let payload
        try {
            payload = jwt.verify(token, process.env.JWT_SECRET)
        } catch (error) {
            return NextResponse.json({ user: null });
        }

        const user = await User.findById(payload.id).select('-password -otp -resetOtp');
        if (!user) return NextResponse.json({ user: null });

        return NextResponse.json({ user: null });
    } 
    catch (error) {
        console.error(err);
        return NextResponse.json({ user: null, message: "Server error" }, { status: 500 });
    }
}