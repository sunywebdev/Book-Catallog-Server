/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const getAllUser = async () => {
  const users = await prisma.user.findMany();

  const usersWithoutPassword = users.map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });

  return usersWithoutPassword;
};

const getSingleUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });
  return user;
};
const updateSingleUser = async (id: string, payload: Partial<User>) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });
  return user;
};
const deleteSingleUser = async (id: string) => {
  return prisma.$transaction(async ts => {
    const user = await ts.user.findUnique({
      where: {
        id,
      },
      include: {
        orders: true,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    await ts.order.deleteMany({
      where: {
        userId: id,
      },
    });

    const deletedUser = await ts.user.delete({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        contactNo: true,
        address: true,
        profileImg: true,
      },
    });

    return deletedUser;
  });
};
export const UserService = {
  getAllUser,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
};
