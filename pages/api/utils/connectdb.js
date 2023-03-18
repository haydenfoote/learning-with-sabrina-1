import mongoose from "mongoose";

const connectMongo = async () => await mongoose.connect(process.env.MONGOLINK);

export default connectMongo;
