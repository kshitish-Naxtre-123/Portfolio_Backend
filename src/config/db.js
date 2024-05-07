import mongoose from "mongoose"

const connectDB=async()=>{
    try {
        const conectionInstance=await mongoose.connect(process.env.MONGODB_URI)
        console.log("successfully connect with mongodb database");
    } catch (error) {
        console.log(`connection failed:${error.message}`);
    }
}

export default connectDB