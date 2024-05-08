import mongoose from "mongoose";
const {Schema} = mongoose;
const UserSchema = new Schema(
    {
        title:{
            type:String,
            required:true,
        },
        image:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        }


    }
)
export default mongoose.model('blogs',UserSchema);