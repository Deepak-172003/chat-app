import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log("connected to monogodb")
    
  } catch (error) {
    console.log("Error connecting to mongodb",error)
  }
}

export default connectToMongoDB
