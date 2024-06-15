/*
  Warnings:

  - You are about to drop the column `currentpartnerId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `UserAdmin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `User_currentpartnerId_idx` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `currentpartnerId`,
    ADD COLUMN `currentPartnerId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `UserAdmin`;

-- CreateIndex
CREATE INDEX `User_currentPartnerId_idx` ON `User`(`currentPartnerId`);
