import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate';
import { CreateTypeController } from '../modules/types/useCases/createType/CreateTypeController';
import { GetTypesController } from '../modules/types/useCases/getTypes/GetTypesController';

const typesRoutes = Router();

const createTypeController = new CreateTypeController();
const getTypesController = new GetTypesController();

typesRoutes.post('/', [authenticate], createTypeController.handle);
typesRoutes.get('/', [authenticate], getTypesController.handle);

export { typesRoutes };
