const mongoose = require('mongoose');
const IncomeSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        default:"income"
    },
    date:{
        type:Date,
        default:Date.now
    },
    category:{
        type:String,
        required:true,
         trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    }
},{timestamps:true});
module.exports=mongoose.model('Income',IncomeSchema);