const express= require( "express")
// import bcrypt from "bcryptjs"
const userRouter=express.Router()

userRouter.post("/signup",  async(req,res)=>{
const newUser=new UserCollection({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
})
const user=await newUser.save()

})

module.exports =userRouter