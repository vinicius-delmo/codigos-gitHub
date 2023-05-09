import { createUser, verifyUser } from '../controllers/userController';
import { validateUser, hashPassword } from '../middlewares/auth';
import { Router } from "express";

const authRouter: Router = Router();
const authLogin: Router = Router();

authRouter.post('/', hashPassword, validateUser, createUser);
authLogin.post('/', verifyUser);

export { authRouter, authLogin } ;