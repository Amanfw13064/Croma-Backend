const mongoose=require('mongoose')

module.exports=()=>{
    return mongoose.connect('mongodb+srv://amanfw13064:anonymous@cluster0.66g2t.mongodb.net/test')
}