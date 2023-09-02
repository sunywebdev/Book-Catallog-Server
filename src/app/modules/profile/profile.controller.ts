import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchasync';
import sendResponse from '../../../shared/sendResponse';
import { ProfileService } from './profile.service';

const getMyProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await ProfileService.getMyProfile(user);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User Retrieved successfully',
    data: result,
  });
});
export const ProfileController = {
  getMyProfile,
};
