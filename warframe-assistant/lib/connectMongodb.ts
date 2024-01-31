import mongoose from "mongoose"

if (!process.env.MONGODB_URI) {
  throw new Error("Invalid environment variable: MONGODB_URI")
}

const uri = process.env.MONGODB_URI

const connectMongoDB = async () => {
  try {
    await mongoose.connect(uri, {
      dbName: process.env.DB_NAME,
    })
    console.log("Connected to mongodb")
  } catch (e) {
    console.log(e)
  }
}

export default connectMongoDB
