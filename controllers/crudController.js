const post=(model)=>async(req,res)=>{
    try{
     const item =await model.create(req.body)
     return res.send(item)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
}
const getAll=(model,page)=>{
    return async(req,res)=>{
        try{
            const items=await model.find().lean().exec()
            return res.render(page,{items:items})
        }catch(err){
            return res.status(500).send(err.message)
        }
    }
}

const update=(model)=>async(req,res)=>{
    console.log("update")
  try{

     await model.findByIdAndUpdate(req.params.id,req.body)
      const user=await model.find().lean().exec()
      return res.render(page,{user:user})

  }catch(err){
      return res.status(500).send(err.message)
  }
}

module.exports=(model,page=null)=>({
post:post(model),
getAll:getAll(model,page),
update:update(model,page),
})