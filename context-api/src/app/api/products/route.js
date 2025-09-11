import { NextResponse } from "next/server";
import products from '@/data/products.json'

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