const express=require('express')

const router=express.Router()

const Product=require('../models/productModel')

router.get('',async(req,res)=>{
    try{
        const search=req.query.search
        const items=await Product.find({category:search}).lean().exec()
         return res.send(items)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get('/section',async(req,res)=>{
    try{
         return res.render('searchSection')
    }catch(err){
        return res.status(500).send(err.message)
    }
})


module.exports=router