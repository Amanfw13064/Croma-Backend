const jwt=require('jsonwebtoken')
require('dotenv').config()
const verfyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,decoded)=>{
            if(err) return reject(err)
                resolve(decoded)
        })
    })
}

module.exports=async(req,res,next)=>{
      if(!req?.headers?.authorization){
          return res.status(400).send({messsage:"BAd Request"})
      }
      const bearertoken=req.headers.authorization
      if(!bearertoken.startsWith("Bearer "))
      {
        return res.status(400).send({messsage:"BAd Request"}) 
      }
      const token=bearertoken.split(" ")[1]
      try{
        const verify=await verfyToken(token)
      }catch(err){
          return res.status(400).send({message:"Not Valid"})
      }
      next()
}