const IncomeSchema=require("../models/IncomeModel")


exports.addIncome=async (req,res)=>{
    const {title,amount,category,description,date} = req.body
    const income=IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try{
        if(!title||!category||!description){
            return res.status(400).json({message:"Please fill all the fields"})
        }
        if(amount<=0||!amount==='number'){
            return res.status(400).json({message:"Please enter a valid amount"})
        }
        await income.save();
        return res.status(201).json({message:"Income added successfully"})
    }
    catch(err){
        return res.status(400).json({message:err.message})
    } 
    
}
exports.getIncome=async (req,res)=>{
    try{
        const income=await IncomeSchema.find().sort({createdAt:-1})
        return res.status(200).json(income)
    }
    catch(err){
        return res.status(400).json({message:err.message})
    }
}
exports.deleteIncome=async (req,res)=>{
    const {id}=req.params;
         IncomeSchema.findByIdAndDelete(id)
         .then((income)=>{
             return res.status(200).json({message:"Income deleted successfully"})
         })
         .catch((err)=>{
             return res.status(400).json({message:err.message})
         })
}