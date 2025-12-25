    import mongoose from 'mongoose';

    const messageSchema= new mongoose.Schema({
        initTime : Date,
        receiverId:{
            type:mongoose.Types.ObjectId,
            required:true,
            ref:'User'
        },
        content: {
            type:String,
            required:true,
            minLength:[5,'message content must be at least 5 character long'],
            maxLength:[5000,'message content must be at least 5000 character long'],
            trim:true
        }
    },{})

    const messageModel = mongoose.models.Message || mongoose.model('Message',messageSchema)

    export default messageModel;