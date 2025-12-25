import{Router} from 'express'
import * as messageService from './services/message.service.js'
import { authentication,authorization } from "../../middleware/auth.middleware.js";
const router =Router()

router.post("/sendMessage",authentication,authorization(['user','admin']),messageService.sendMessage)


export default router