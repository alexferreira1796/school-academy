import { Router } from 'express';
import { validUser } from '../middlewares/md-valid-user';
import { authenticate } from '../middlewares/authenticate';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { GetUserController } from '../modules/users/useCases/getUser/GetUserController';
import { GetStudentsController } from '../modules/users/useCases/getStudents/GetStudentsController';
import { GetStudentWithIdController } from '../modules/users/useCases/getStudentWithId/GetStudentWithIdController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const getUserController = new GetUserController();
const getStudentsController = new GetStudentsController();
const getStudentWithIdController = new GetStudentWithIdController();

usersRoutes.post('/', [validUser], createUserController.handle);

/* PRIVATE ROUTE */
usersRoutes.get('/', [authenticate], getUserController.handle);
usersRoutes.get('/students', [authenticate], getStudentsController.handle);
usersRoutes.get(
  '/students/:id',
  [authenticate],
  getStudentWithIdController.handle,
);

export { usersRoutes };
