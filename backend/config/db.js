import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://av279948:Rma2003@cluster0.sjyrrot.mongodb.net/DELICAZY').then(()=>console.log(" DB CONNECTED"));
}