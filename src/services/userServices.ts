import mongoose,{ QueryOptions } from "mongoose";
const User=require('../models/users')
import { userDocument,UserInput } from "../models/users";


export function createUser(input:UserInput ){
    return User.create(input)
}

export function findUser(query:mongoose.FilterQuery<userDocument>
    ,options:mongoose.QueryOptions={lean:true}){
        return User.find(query,{},options)
    }


export function findAndUpdate(
    query:mongoose.FilterQuery<userDocument>,
    update:mongoose.UpdateQuery<userDocument>,
    options:QueryOptions
 ){
    return User.findOneAndUpdate(query,update,options)
 }    

 export function deleteUser(
    query:mongoose.FilterQuery<userDocument>
 ){
    return User.deleteOne(query)
 }