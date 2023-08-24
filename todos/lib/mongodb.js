import mongoose from "mongoose";

const connectMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to Database")
    } catch (error) {
        console.log(`Database error ${error}`)
    }
}

export default connectMongoDB;