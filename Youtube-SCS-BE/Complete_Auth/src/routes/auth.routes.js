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


/**
 * @route GET  /api/auth/refresh-token
 * @description give user a new accessToken
 * @access private
 */
authRouter.get("/refresh-token", authController.refreshToken);


/**
 * @route GET  /api/auth/logout
 * @description logout a user
 * @access public
 */
authRouter.get("/logout", authController.logout);


export default authRouter;
