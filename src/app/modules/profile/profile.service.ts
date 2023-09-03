/* eslint-disable @typescript-eslint/no-explicit-any */

import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { prisma } from '../../../shared/prisma';

const getMyProfile = async (user: any | null) => {
  const { id } = user;
  const isExist = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};
export const ProfileService = {
  getMyProfile,
};
