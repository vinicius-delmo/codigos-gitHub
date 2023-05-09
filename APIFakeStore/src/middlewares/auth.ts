import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from "express";

export async function hashPassword(req: Request, res: Response, next: NextFunction) {
  try {
    const saltRounds = process.env.SALT_ROUNDS!;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, Number(saltRounds));
    res.locals.hash = hashedPassword;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export function validateUser(req: Request, res: Response, next: NextFunction) {
  const { user, password } = req.body;
  if (!user || !password) {
    res.status(400).json({ message: 'User and password are required' });
  } else {
    next();
  }
}
  export default {
    hashPassword,
    validateUser,
  };