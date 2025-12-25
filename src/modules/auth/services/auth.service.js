import userModel from "../../../DB/models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const register = async(req,res,next)=>{
    try {
        const {email,userName,password} =req.body // {}
    
        console.log(req.body);
    
    if(await userModel.findOne({ email })){
        return res.status(409).json({
        "message":"user already exist"
    })
    }else{
        
        const hashedPassword = bcrypt.hashSync(password,10)// plain text , salt round
        await userModel.create({
            email,
            userName,
            password:hashedPassword
        })//{}
        return res.status(201).json({
            message:'user created successfully'
        }) 
    }
    } catch (error) {
        return res.status(400).json({error:err.message})

    }
    
}

export const login =async(req,res,next)=>{
    try {
        // logic


    const {email, password}= req.body 
    const user =await userModel.findOne({email}) //{_id,email,userName,password}
    // email exist  // done
    if(!user){
        return res.status(404).json({
            "message":"invalid email or password"
        })
    }
    // password correct
    if(!bcrypt.compareSync(password,user.password)){
        return res.status(404).json({
            "message":"invalid email or password"
        })
    }

    const token = jwt.sign({id:user._id,islogged:true }, "your_secret_key",{expiresIn:"1h"}) // payload , secret key ,options 

    return res.status(200).json({
        "message":"user logged in successfully",
        token
    })
    } catch (error) {
        return res.status(400).json({error:err.message})

    }
}