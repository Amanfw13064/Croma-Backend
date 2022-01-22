const express=require('express')

const router=express.Router()

const Otp=require('../Models/OtpModel')

const jwt=require('jsonwebtoken')

require('dotenv').config()

const newToken=(OTP)=>{
  return  jwt.sign({OTP:OTP},process.env.JWT_SECRET_KEY,{ expiresIn: 60*1 })
}

const transporter=require('../config/email')

const authorization=require('../middleware/authorization')

router.post('/verify',authorization,async(req,res)=>{
    try{
        const otp=await Otp.findOne({otp_number:req.body.otp_no}).lean().exec()
        if(!otp){
            return res.status(400).send({message:"Not Valid"})
        }else{
            return res.send({message:"Valid"})
        }
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.post('',async(req,res)=>{
    try{
        let otp={
            otp_number:Math.floor((Math.random()*9999)*100)
        }
       const OTP=await Otp.create(otp)
       const token=newToken(OTP)
       const message = {
        from:"customersupport@croma.com" ,
        to: "Amanshar@gmail.com",
        subject: 'OTP Verification',
        text: `Your Otp number only valid for one minute ${OTP.otp_number}`,
        html: `<body style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebdb_Bqpt2hqDivdc1hUiEZOU4GiZGQSWXg&usqp=CAU);color: white;font-size: 22px;background-size: contain;"><p>Your Otp number only valid for one minute ${OTP.otp_number}</p></body>`
      };  
      
          transporter.sendMail(message)
       return res.send({token})
    }catch(err){
        return res.status(500).send(err.message)
    }
})



router.get('/all',async(req,res)=>{
    try{
        const otp=await Otp.find()
        return res.send(otp)
    }catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports=router