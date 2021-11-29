import express, { Request, Response } from 'express';
import cors from 'cors';
import Database from './database';
import { router } from './routes';

Promise.all([new Database().openConnection()])
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(router);
    app.listen(3333, () => {
      console.log('Server running');
    });
  })
  .catch(console.error);
