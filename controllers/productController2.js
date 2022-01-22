const express=require('express')

const router=express.Router()

 const Product=require('../models/productModel')

const crudConstroller=require('./crudController')

router.get('/:id/productInfo',async(req,res)=>{
    try{
        console.log("INFO")
    let product=await Product.findById(req.params.id).lean().exec()
    return res.render('productInfo',{product:product})
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.post('',crudConstroller(Product).post)

router.get('',async(req,res)=>{
    try{
        let items=await Product.find({category:"smartphone"}).lean().exec()
        let items2=await Product.find({category:"laptop"}).lean().exec()
        let items3=await Product.find({category:"keyphones"}).lean().exec()
      
    return res.render('Mobiles',{items:items,items2:items2,items3:items3})
    }catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports=router