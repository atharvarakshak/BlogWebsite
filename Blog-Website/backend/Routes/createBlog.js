import express from 'express';
const router = express.Router();

import blog from '../models/blog.js'

router.post('/createblog',async (req,res)=>
{

    try{
        await blog.create({
            title:req.body.title,
            image:req.body.image,
            content:req.body.content,

        })
        res.json({success:true});
     }
     catch(error){
        console.log(error);
        res.json({success:false})
     }
})
export default router;