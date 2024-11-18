import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://pruthviraj:HXnwjzL3Jz9DDBRB@cluster0.ihb18.mongodb.net/blog-app');
    console.log("DB Connected");
}