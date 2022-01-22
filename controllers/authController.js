const jwt=require('jsonwebtoken')

require('dotenv').config()

const newToken=(user)=>{
    return jwt.sign({user:user},process.env.JWT_SECRET_KEY)
}

const User=require('../models/userModel')

const signup=async(req,res)=>{
    try{
     let user=await User.findOne({email:req.body.email})
     if(user){
         return res.status(400).send({message:"User with Email already exists"})
     }
     user=await User.create(req.body)
     const token=newToken(user)

     return res.send({user,token})



    }catch(err){
        return res.status(500).send(err.message)
    }
}
const signin=async(req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).send({message:"Either email or password is incorrect"})
        }

        const verify=user.checkpassword(req.body.password)
        if(!verify){
            return res.status(400).send({message:"Either email or password is incorrect"})
        }
        const token=newToken(user)
        return res.render("Mobiles",{user,token})

    }catch(err){
        return res.status(500).send(err.message)
    }
}

module.exports={signup,signin,newToken}