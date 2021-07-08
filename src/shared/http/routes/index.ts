import { Router } from 'express';

const routes = Router();

routes.get('/', (Request, response) => {
  return response.json({ message: 'Hello Dev' });
});

export default routes;
