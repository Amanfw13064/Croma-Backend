const mongoose=require('mongoose')

const otpSchema=new mongoose.Schema({
    otp_number:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
})

module.exports=mongoose.model('otp',otpSchema)