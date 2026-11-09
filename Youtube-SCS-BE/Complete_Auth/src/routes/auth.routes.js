import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';

const authRouter = Router();



/**
 * @route POST  /api/auth/register
 * @description register a user
 * @access public
 */
authRouter.post("/register", authController.register)



/**
 * @route GET  /api/auth/get-me
 * @description get current user
 * @access private
 */

authRouter.get("/get-me", authController.getMe)


export default authRouter;
