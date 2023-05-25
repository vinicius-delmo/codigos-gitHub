import knex from "knex";
import { Knex } from "knex";
import config from "../../knexfile";

const knexInstance: Knex = knex(config);

export const createUser = (user: string, password: number) => {
  return knexInstance('users').insert({user, password})
}

export const findUserDB = (user: string) =>{
  return knexInstance('users').select('id').where({user})
}

export const findPassword = (user: string) =>{
  return knexInstance('users').select('password').where({user})
}


