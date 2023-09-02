import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post(
  '/signup',

  AuthController.insertIntoDB,
);
router.post(
  '/signin',

  AuthController.loginUser,
);

export const AuthRoutes = router;
