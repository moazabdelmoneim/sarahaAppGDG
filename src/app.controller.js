import authController from './modules/auth/auth.controller.js'
import userController from'./modules/user/user.controller.js'
import messageController from './modules/messages/message.controller.js'
import dbConnect from '../src/DB/db.connection.js'
const bootstrap = (app,express)=>{
        app.use(express.json())
        dbConnect()
        app.use('/auth',authController)
        app.use('/user', userController)
        app.use("/message", messageController);//localhost:3000/message
}


export default bootstrap;



// 6:55