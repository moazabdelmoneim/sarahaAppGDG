import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        minLength:[2, 'the minimum length of name is 2 char'],
        maxLength:[50,'the maximum length of name is 50 char']
    },
    email:{
        type:String,
        required:true,
        unique: true 
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
    ,
    password:{
        type:String,
        required:true
    },
    DOB:Date // short hand 

},{
    timestamps: true 
})

// user name email pass fdsafdsafa
///            if  model/ table user exist dont create the model again else create the model/ table 
const userModel =mongoose.models.User|| mongoose.model("User",userSchema)

export default userModel




