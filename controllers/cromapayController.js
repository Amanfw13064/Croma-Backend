const express=require('express')

const router=express.Router()

router.get('',async(req,res)=>{
    try{
      return res.render('cromaPay')
    }catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports=router