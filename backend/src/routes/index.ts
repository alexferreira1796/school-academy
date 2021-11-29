import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { usersRoutes } from './users.routes';
import { typesRoutes } from './types.routes';
import { documentsRoutes } from './documents.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/types', typesRoutes);
router.use('/documents', documentsRoutes);
router.use(authenticateRoutes);

export { router };
