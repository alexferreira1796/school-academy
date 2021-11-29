import { Router } from 'express';
import path from 'path';
import multer from 'multer';
import { authenticate } from '../middlewares/authenticate';
import { CreateDocumentsController } from '../modules/documents/useCases/createDocument/CreateDocumentsController';
import { GetDocumentStudentController } from '../modules/documents/useCases/getDocumentStudent/GetDocumentStudentController';
import { OpenDocumentController } from '../modules/documents/useCases/openDocument/OpenDocumentController';
import { UpdateDocumentsController } from '../modules/documents/useCases/updateDocument/UpdateDocumentsController';
import { GetDocumentHoursController } from '../modules/documents/useCases/getDocumentHours/GetDocumentHoursController';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage,
});

const documentsRoutes = Router();

const createDocumentsController = new CreateDocumentsController();
const getDocumentStudentController = new GetDocumentStudentController();
const openDocumentController = new OpenDocumentController();
const updateDocumentsController = new UpdateDocumentsController();
const getDocumentHoursController = new GetDocumentHoursController();

documentsRoutes.post(
  '/',
  [authenticate],
  upload.single('file'),
  createDocumentsController.handle,
);

documentsRoutes.get(
  '/hours',
  [authenticate],
  getDocumentHoursController.handle,
);

documentsRoutes.get(
  '/:id',
  [authenticate],
  getDocumentStudentController.handle,
);

documentsRoutes.get('/tmp/:link', openDocumentController.handle);

documentsRoutes.put('/', [authenticate], updateDocumentsController.handle);

export { documentsRoutes };
