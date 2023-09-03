/*
  Warnings:

  - The `status` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `rating` on the `Review` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "RoleUser" AS ENUM ('admin', 'customer');

-- CreateEnum
CREATE TYPE "StatusType" AS ENUM ('pending', 'shipped', 'delivered');

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "status",
ADD COLUMN     "status" "StatusType" NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "RoleUser" NOT NULL DEFAULT 'customer';

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
