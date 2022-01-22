const mongoose=require('mongoose')

const bcrypt=require('bcryptjs')

const userSchema=new mongoose.Schema({
        name:String,
        email:{type:String,required:true},
        password:{type:String,required:true},
        username:String,
        mobile:Number,
        description:String,
})

userSchema.pre('save',function(next){
    if(!this.isModified('password')) next()
    
    this.password=bcrypt.hashSync(this.password,8)
    next()
})

userSchema.methods.checkpassword=(function(password){
    return bcrypt.compareSync(password, this.password);
})

module.exports=mongoose.model('user',userSchema)