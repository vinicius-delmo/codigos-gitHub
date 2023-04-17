import { Request, Response } from 'express';
import knex from 'knex';
import config from '../../knexfile';
import { Category } from '../types/index'

const knexInstance = knex(config);

const index = async (req: Request, res: Response):Promise<void> => {
  try {
    const categories: Category[] = await knexInstance('categories').select('*');
    res.status(200).json(categories);
  } catch (error) {
    res.send(error);
  }
};
const show = async (req: Request, res: Response):Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const product = await knexInstance('categories').select('*').where({ id });
    if (!product.length) throw new Error('Essa categoria não existe');

    res.status(200).json(product);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response):Promise<void> => {
  try {
    const { name } = req.body;

    const id: number[] = await knexInstance('categories').insert({
      name,
    });

    res.status(201).json({ id: id[0], name });
  } catch (error: any) {
    res.send(error);
  }
};

const update = async (req: Request, res: Response):Promise<void> => {
    try {
      const id = req.params.id;
      const { name } = req.body;
      const updatedData: Category = { name };
  
      const product = await knexInstance("categories")
        .update(updatedData)
        .where({ id });
  
        res.status(201).json({ id: id[0], name });
    } catch (error: any) {
      res.send(error.message ? { error: error.message } : error);
    }
  };
  const remove = async (req: Request, res: Response):Promise<void> => {
    try {
      const id: number = parseInt(req.params.id);
      const product = await knexInstance("categories").delete().where({ id });
  
      if (!product) throw new Error("Essa categoria não existe");
  
      res.status(200).json({ msg: "Categoria deletado" });
    } catch (error: any) {
      res.send(error.message ? { error: error.message } : error);
    }
  };

export default { index, show, insert, update, remove };
