
import  mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongoURI = process.env.MONGO_URI;


const mongoDB = async()=>{
    
   await mongoose.connect(mongoURI)
    .then(async ()=>{
        console.log("mongodb connected");

        
    })
    .catch(()=>{
        console.log('failed');
    })
}


export default mongoDB
