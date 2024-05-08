import express, { json } from "express";
const app = express()
const port = 5001

import mongoDB from './db.js';
import createUserRouter from './routes/createUser.js'
import createBlog from './routes/createBlog.js'

mongoDB();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:7000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(json())

app.use('/api',createUserRouter);
app.use('/api',createBlog);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})