const ExpenseSchema=require("../models/ExpenseModel")


exports.addExpense=async (req,res)=>{
    const {title,amount,category,description,date} = req.body
    const income=ExpenseSchema({
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
        return res.status(201).json({message:"Expense added successfully"})
    }
    catch(err){
        return res.status(400).json({message:err.message})
    } 
    
}
exports.getExpense=async (req,res)=>{
    try{
        const income=await ExpenseSchema.find().sort({createdAt:-1})
        return res.status(200).json(income)
    }
    catch(err){
        return res.status(400).json({message:err.message})
    }
} 
exports.deleteExpense=async (req,res)=>{
    const {id}=req.params;
    ExpenseSchema.findByIdAndDelete(id)
         .then((income)=>{
             return res.status(200).json({message:"Expense deleted successfully"})
         })
         .catch((err)=>{
             return res.status(400).json({message:err.message})
         })
}