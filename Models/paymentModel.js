const mongoose=require('mongoose')

const paymentSchema=new mongoose.Schema({
    card_number:{type:Number,required:true},
    date:String,
    cvv_number:{type:Number,required:true},
    holder_name:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
})

module.exports=mongoose.model('payment',paymentSchema)