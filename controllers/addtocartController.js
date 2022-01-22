const express=require('express')

const router=express.Router()

const Addtocart=require('../Models/addtocartmodel')

const crudConstroller=require('./crudController')

// router.get('/:id/addtocartInfo',async(req,res)=>{
//     try{
//         console.log("INFO")
//     let addtocart=await addtocart.findById(req.params.id).lean().exec()
//     return res.render('addtocartInfo',{addtocart:addtocart})
//     }catch(err){
//         return res.status(500).send(err.message)
//     }
// })

router.post('',crudConstroller(Addtocart).post)

router.get('',async(req,res)=>{
    try{
    let items=await Addtocart.find().lean().exec()
    return res.render('checkout',{items:items})
    // let items2=await Smartphone.find().lean().exec()
    // return res.render('Home',{items:items,items2:items2})
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const item=await Addtocart.findByIdAndDelete(req.params.id)
        return res.send(item)
    }catch(err){
        return res.status(err.message)
    }
})
// router.get('',crudConstroller(addtocart,"home").getAll)

module.exports=router