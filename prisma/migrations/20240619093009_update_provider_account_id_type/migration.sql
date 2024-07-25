/*
  Warnings:

  - You are about to alter the column `providerAccountId` on the `Account` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Account` MODIFY `providerAccountId` VARCHAR(191) NOT NULL;
