import mongoose,{Document} from "mongoose";


export interface UserInput{
    name:string,
    dept:string
}


export interface userDocument extends UserInput, mongoose.Document {
    name:string,
    dept:string
}


interface User{
    name:string,
    dept:string
}
const userSchema= new mongoose.Schema<User> ({
name:{
    type:String,
    required:true
},
dept:{
    type:String,
required:true  
}
})

module.exports= mongoose.model<User>('userModel',userSchema)
