import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchasync';
import { OrderService } from './order.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await OrderService.insertIntoDB(user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});
const getAllOrder = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await OrderService.getAllOrder(user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrieved  successfully',
    data: result,
  });
});
const getOrderById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = req.user;

  const result = await OrderService.getOrderById(id, user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrieved by id successfully',
    data: result,
  });
});

export const OrderController = {
  insertIntoDB,
  getAllOrder,
  getOrderById,
};
