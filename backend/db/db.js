const mongoose = require('mongoose')
const db=async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB Connected')
    }catch(err){
        console.log("database connection failed due to this error",err)
    }
}
module.exports = {db};