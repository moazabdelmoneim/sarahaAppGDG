import mongoose from "mongoose";



const dbConnect = async()=>{
    await mongoose.connect('mongodb://localhost:27017/sarahaApp').then(res=>{
        console.log('db connected');
    }).catch(err=>{
        console.log('failed to connect to the database');
    })}


export default dbConnect