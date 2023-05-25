import { NextFunction, Request, Response } from "express";
import { registerUser, authenticateUser, verifyPasswordUser } from '../service/auth';

export async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { user } = req.body;
    const password = res.locals.hash;
    await registerUser(user, password);
    res.status(201).send("User successfully registered!");
  } catch (error) {
    next(error)
  }
}


export async function verifyUser(req: Request, res: Response, next: NextFunction){
  try{
    const { user, password} = req.body
    const checkUser = await verifyPasswordUser(user);
    const token = await authenticateUser(user, password, checkUser, process.env.SECRET_KEYS);
    res.json({ token: token });
  }catch (error) {
    next(error)
  }
}

export default {
  createUser,
};