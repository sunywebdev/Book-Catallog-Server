import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { OrderController } from './order.controller';

const router = express.Router();
router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.insertIntoDB,
);
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  OrderController.getAllOrder,
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  OrderController.getOrderById,
);

export const OrderRoutes = router;
