import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { BookController } from './book.controller';

const router = express.Router();

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.createBook,
);
router.get('/', BookController.getAllBook);
router.get(
  '/:id',

  BookController.getSingleBook,
);
router.get(
  '/:id/category',

  BookController.getBooksByCategoryId,
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.updateSingleBook,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.deleteSingleBook,
);
export const BookRoutes = router;
