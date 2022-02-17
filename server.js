 const app=require('./app')
//  dotenv.config()

require('dotenv').config()

const connect=require('./config/db')
const port=process.env.PORT || 5555;

app.listen(port,async()=>{
    await connect()
    console.log(`listening port ${port}`)
})

// const app=require('./app')

// const connect=require('./config/db')

// app.listen(5555,async()=>{
//     await connect()
//     console.log('listning port 5555')
// })
