import jwt from 'jsonwebtoken'
import userModel from '../DB/models/user.model.js';


export const authentication= async(req,res,next)=>{
    try{// logic
    //  1. check if the token is sent// done 
    //  2. verify the token // done
    //  3. find the user 
    //  4. if all ok next()
    
    const {authorization}= req.headers // {token}\

    if(!authorization ){
        return res.status(401).json({
            "message":"token required"
        })
    }

    const decoded= jwt.verify(authorization,"your_secret_key")
    if(!decoded?.id){
        return res.status(401).json({
            "message":"invalid token payload"
        })
    }

    const user =await userModel.findById(decoded.id)
    
    req.user = user

    return next()
    }catch(error){
        return res.status(401).json({
            "message":"invalid token",
            error: error.message
        })
    }   

    
}

export const authorization=(accessRoles)=>{
    return async(req,res,next)=>{
        try{
            if(!accessRoles.includes(req.user.role)){
                return res.status(403).json({
                    "message":"unauthorized user"
                })
            }
            return next()
        }catch(error){
            return res.status(403).json({
                "message":"forbidden",
                error: error.message
            })
        }
    }
}