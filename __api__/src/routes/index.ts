import express, {Request, Response} from 'express';
import dishes from '../data/dishes.json';

const routes = express.Router();

const sleep = () => {
  const ms = Math.floor(Math.random() * 1500);
  console.log(`waiting ${ms} ms`);
  return new Promise((resolve) => setTimeout(resolve, ms));
};

routes.get(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    await sleep();
    return response.json({message: 'success'});
  },
);

routes.get(
  '/dishes',
  async (request: Request, response: Response): Promise<Response> => {
    await sleep();
    return response.json(dishes);
  },
);

export default routes;
