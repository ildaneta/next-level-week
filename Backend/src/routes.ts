import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.post('/points', pointsController.create);
routes.get('/items', itemsController.index);
routes.get('/points/:id', pointsController.show);
routes.get('/points/:id', pointsController.index);

// index se for listagem
// show se for exibir um item
// create
// update
// delete

export default routes;