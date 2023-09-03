"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = require("../../../shared/prisma");
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.prisma.user.findMany();
    const usersWithoutPassword = users.map(user => {
        const { password } = user, userWithoutPassword = __rest(user, ["password"]);
        return userWithoutPassword;
    });
    return usersWithoutPassword;
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.user.findUnique({
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
});
const updateSingleUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.user.update({
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
});
const deleteSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.prisma.$transaction((ts) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield ts.user.findUnique({
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
        yield ts.order.deleteMany({
            where: {
                userId: id,
            },
        });
        const deletedUser = yield ts.user.delete({
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
    }));
});
exports.UserService = {
    getAllUser,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
};
