import { NextResponse } from "next/server"

let products = [
    { id: 1, name: "T-shirt", price: 99 },
    { id: 2, name: "Shirt", price: 199 },
    { id: 3, name: "pant", price: 299 },
]

export async function GET() {
    try {
        return NextResponse.json({
            success: true,
            data: products
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Something went wrong",
        }, { status: 500 })
    }
}


export async function POST(req) {
    try {
        const body = await req.json()
        const { name, price } = body
        if (!name || !price) {
            return NextResponse.json({
                success: false,
                message: "Name and price are required"
            }, { status: 400 })
        }

        const newProduct = { id: Date.now(), name, price }
        products.push(newProduct)

        return NextResponse.json({
            success: true,
            message: "Product created Succeffully!!",
            data: newProduct
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Invalid request" },
            { status: 400 }
        )
    }
}