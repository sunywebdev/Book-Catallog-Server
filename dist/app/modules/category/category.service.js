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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const prisma_1 = require("../../../shared/prisma");
const createCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.create({
        data: payload,
    });
    return result;
});
const getAllCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.findMany();
    return result;
});
const getSingleCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const Category = yield prisma_1.prisma.category.findUnique({
        where: {
            id,
        },
        include: {
            books: true,
        },
    });
    return Category;
});
const updateSingleCategory = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const Category = yield prisma_1.prisma.category.update({
        where: {
            id,
        },
        data: payload,
    });
    return Category;
});
const deleteSingleCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const Category = yield prisma_1.prisma.category.delete({
        where: {
            id,
        },
    });
    return Category;
});
exports.CategoryService = {
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateSingleCategory,
    deleteSingleCategory,
};
