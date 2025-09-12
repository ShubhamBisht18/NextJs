import mongoose from 'mongoose'

let isConnected = false

export async function connectDB() {
    if (isConnected) return;
    try {
        await mongoose.connect(process.env.MONGO_URI,{dbName: "nextauth"})
        isConnected = true;
        console.log("✅ MongoDB connected");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        throw err;
    }
}