const express=require('express')

const router=express.Router()

const Payment=require('../Models/paymentModel')

router.post('',async(req,res)=>{
    try{
        const payment=await Payment.create(req.body)
        return res.status(201).send(payment)

    }catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports=router