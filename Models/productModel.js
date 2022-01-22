const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    image_url:[{type:String,required:true}],
    name:{type:String,required:true},
    price:[{type:Number,required:true}],
    category:String,
})

module.exports=mongoose.model('product',productSchema)