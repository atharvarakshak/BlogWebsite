import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';

import blog from '../models/blog.js'


router.post('/createblog',async (req,res)=>
{
    let eId = await blog.findOne({'email':req.body.email})
    console.log(eId);
   
        try{
            await blog.create({
                email:req.body.email,
                title:req.body.title,
                image:req.body.image,
                content:req.body.content,
                date:req.body.blog_date,
                
            })
            res.json({success:true});
        }
        catch(error){
            console.log(error);
            res.json({success:false})
        }
   
})
// display
router.post('/myblogs',async (req,res)=>
{

    try{
        let myBlog = await blog.findOne({'email':req.body.email}) ;
        res.json(myBlog)
        
        // res.json({success:true});
     }
     catch(error){
        console.log(error);
        res.json({success:false})
     }
})

export default router;