const mongoose=require('mongoose')

const addtocartSchema=new mongoose.Schema({
    image_url:[{type:String,required:true}],
    name:{type:String,required:true},
    price:[{type:Number,required:true}],
  
})

module.exports=mongoose.model('addtocart',addtocartSchema)