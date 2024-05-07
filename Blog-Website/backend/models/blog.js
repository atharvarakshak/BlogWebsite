import mongoose from "mongoose";
const {Schema} = mongoose;
const UserSchema = new Schema(
    {
        title:{
            type:String,
            required:true,
        },
        image:{
            type:image
        }

    }
)