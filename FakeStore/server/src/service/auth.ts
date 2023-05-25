import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findPassword, findUserDB } from '../repositories/user';

export async function registerUser(user: string, password: number) {
  const findUser = await findUserDB(user)
  if(findUser.length !== 0){
    throw new Error('User already exists')
  }
  const createdUser = await createUser(user, password);
  return createdUser;
}

export async function verifyPasswordUser(user: string){
  const seePassword: any = await findPassword(user)
  return seePassword[0].password;
}


export async function authenticateUser(user: any, password: string, passwordHash: string, secretKey: any){
  const verifyPassword = await bcrypt.compare(password, passwordHash)
  if(verifyPassword){
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '10h' });
    return token;
  }throw new Error ('Incorrect password')
}

