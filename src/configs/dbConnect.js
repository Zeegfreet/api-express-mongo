import mongoose from "mongoose";
import "dotenv/config";

export default async function dbConnect(){
    mongoose.connect(process.env.DB_CONNECT_URL);
    return mongoose.connection;
};