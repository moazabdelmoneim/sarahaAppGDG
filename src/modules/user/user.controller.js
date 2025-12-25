import { Router } from "express"; 
import * as userService from './services/user.service.js'
import { authentication ,authorization} from "../../middleware/auth.middleware.js";
const router =Router()

router.get('/profile',authentication,authorization(['user','admin']),userService.getUserProfile)
router.patch('/updateProfile',authentication,authorization(['user','admin']),userService.updateProfile)
router.patch('/updatePassword',authentication,authorization(['user','admin']),userService.updatePassword)
export default router