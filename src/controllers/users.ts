import express,{Request,Response} from 'express'
const User= require('../models/users')
const mongoose= require('mongoose')
import {findAndUpdate,createUser,findUser ,deleteUser} from '../services/userServices'


//read  
exports.homedetail=async(req:Request,res:Response)=>{

 let data=  await User.find()
//let data = await findUser({name:"user1"})
 res.status(200).json({
    message:"all users",
    data:data
 })
}


exports.getOneUser =async(req:Request,res:Response)=>{
   let data= await findUser({_id:req.params.id }) 
 res.status(200).json({
    message:"single user",
    data:data
 })
}

exports.deleteOneUser=async(req:Request,res:Response)=>{
   let data= await deleteUser({_id:req.params.id }) 
 res.status(200).json({
    message:"deleted single user",
    data:data
 })
}

exports.createOneUser=async(req:Request,res:Response)=>{
   console.log(req.body)
   let  user= await createUser({name:req.body.name,dept:req.body.dept})
   console.log(user)
   res.status(200).json({
      message:"created single user",
      data:user
   })
}

exports.updateOneUser=async(req:Request,res:Response)=>{
   let data= await findAndUpdate({name:req.body.name},{dept:req.body.dept},{new:true})
   res.json({
      message:"updated single user",
      data:data
   })
}


