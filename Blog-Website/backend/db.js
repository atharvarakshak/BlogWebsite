const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://atharvarakshak23:RHsIW2YQSe1BtX5f@cluster0.dlwp2a9.mongodb.net/blogwebsite?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async()=>{
    
   await mongoose.connect(mongoURI)
    .then(async ()=>{
        console.log("mongodb connected");

        const fetched_data = await mongoose.connection.db.collection("feedbacks");
        await fetched_data.find({}).toArray()
        .then( (data)=>{
            // const foodCategory = 
            if(!data){console.log("error loading");}
            else{
                global.feedbacks = data;
                // console.log(global.feedbacks);
            }
        })
        
    })
    .catch(()=>{
        console.log('failed');
    })
}

module.exports = mongoDB
