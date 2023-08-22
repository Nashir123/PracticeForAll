const mongoose=require('mongoose');
const userModel=require('../model/userSchema');


const signup= async(req,res,next)=>{
    const {name,email,password,confirmPassword}=req.body;

         try {
            const userInfo=userModel({
                name:name,
                email:email,
                password:password
            })
            console.log(name,email,password);
            const result=await userInfo.save();
           return res.status(200).json({
            succsess:true,
            result
           })
         } catch (err) {
            return res.status(404).json({
                succsess:false,
                message:err.message
               })
         }

}






module.exports={
    signup
}
