import { NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/lib/db";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) return NextResponse.json({ message: "Email & password required" }, { status: 400 });

    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });
    if (!user.isVerified) return NextResponse.json({ message: "Please verify your account first" }, { status: 403 });

    const isValid = await bcrypt.compare(password, user.password || "");
    if (!isValid) return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    const res = NextResponse.json({ message: "Logged in" });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",   // strict in prod if you want more security
      path: "/",         // 🔑 ensures cookie is available everywhere
      maxAge: 7 * 24 * 60 * 60,
    });

    return res;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
