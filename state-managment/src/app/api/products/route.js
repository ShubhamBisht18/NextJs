import products from "@/data/products.json";
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Something went wrong!!!"
        },{status: 500})
    }
}