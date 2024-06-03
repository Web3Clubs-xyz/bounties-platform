/*
  Warnings:

  - You are about to drop the column `sponsorId` on the `Bounties` table. All the data in the column will be lost.
  - You are about to drop the column `sponsorId` on the `Grants` table. All the data in the column will be lost.
  - You are about to drop the column `sponsorId` on the `Hackathon` table. All the data in the column will be lost.
  - You are about to drop the column `sponsorId` on the `Jobs` table. All the data in the column will be lost.
  - You are about to drop the column `currentSponsorId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `sponsorId` on the `UserInvites` table. All the data in the column will be lost.
  - The values [NO_REVIEW_SPONSOR_1,NO_REVIEW_SPONSOR_2] on the enum `emailLogs_type` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Sponsors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSponsors` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[partnerId]` on the table `Hackathon` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `partnerId` to the `Bounties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partnerId` to the `Grants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partnerId` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partnerId` to the `UserInvites` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Bounties_sponsorId_idx` ON `Bounties`;

-- DropIndex
DROP INDEX `Grants_sponsorId_idx` ON `Grants`;

-- DropIndex
DROP INDEX `Hackathon_sponsorId_idx` ON `Hackathon`;

-- DropIndex
DROP INDEX `Hackathon_sponsorId_key` ON `Hackathon`;

-- DropIndex
DROP INDEX `Jobs_sponsorId_idx` ON `Jobs`;

-- DropIndex
DROP INDEX `User_currentSponsorId_idx` ON `User`;

-- AlterTable
ALTER TABLE `Bounties` DROP COLUMN `sponsorId`,
    ADD COLUMN `bountyStatus` ENUM('SUBMITTED', 'WAITING_FOR_PAYMENT', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'SUBMITTED',
    ADD COLUMN `partnerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Grants` DROP COLUMN `sponsorId`,
    ADD COLUMN `partnerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Hackathon` DROP COLUMN `sponsorId`,
    ADD COLUMN `partnerId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Jobs` DROP COLUMN `sponsorId`,
    ADD COLUMN `bountyStatus` ENUM('SUBMITTED', 'WAITING_FOR_PAYMENT', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'SUBMITTED',
    ADD COLUMN `partnerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `currentSponsorId`,
    ADD COLUMN `currentpartnerId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `UserInvites` DROP COLUMN `sponsorId`,
    ADD COLUMN `partnerId` VARCHAR(191) NOT NULL,
    MODIFY `memberType` ENUM('PARTNER', 'MEMBER', 'ADMIN') NOT NULL DEFAULT 'MEMBER';

-- AlterTable
ALTER TABLE `emailLogs` MODIFY `type` ENUM('BOUNTY_REVIEW', 'BOUNTY_DEADLINE', 'BOUNTY_DEADLINE_WEEK', 'BOUNTY_CLOSE_DEADLINE', 'NO_VERIFICATION', 'NO_ACTIVITY', 'NO_REVIEW_partner_1', 'NO_REVIEW_partner_2') NOT NULL;

-- DropTable
DROP TABLE `Sponsors`;

-- DropTable
DROP TABLE `UserSponsors`;

-- CreateTable
CREATE TABLE `Partners` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,
    `industry` VARCHAR(191) NOT NULL,
    `twitter` VARCHAR(191) NULL,
    `bio` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `isArchived` BOOLEAN NOT NULL DEFAULT false,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `totalRewardedInUSD` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `Partners_name_key`(`name`),
    UNIQUE INDEX `Partners_slug_key`(`slug`),
    INDEX `Partners_id_slug_idx`(`id`, `slug`),
    INDEX `Partners_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserPartners` (
    `userId` VARCHAR(191) NOT NULL,
    `partnerId` VARCHAR(191) NOT NULL,
    `role` ENUM('PARTNER', 'MEMBER', 'ADMIN') NOT NULL DEFAULT 'MEMBER',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `UserPartners_userId_partnerId_idx`(`userId`, `partnerId`),
    INDEX `UserPartners_partnerId_idx`(`partnerId`),
    PRIMARY KEY (`userId`, `partnerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserAdmin` (
    `userId` VARCHAR(191) NOT NULL,
    `adminId` VARCHAR(191) NOT NULL,
    `role` ENUM('PARTNER', 'MEMBER', 'ADMIN') NOT NULL DEFAULT 'ADMIN',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `UserAdmin_userId_adminId_idx`(`userId`, `adminId`),
    INDEX `UserAdmin_adminId_idx`(`adminId`),
    PRIMARY KEY (`userId`, `adminId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BountyPayments` (
    `id` VARCHAR(191) NOT NULL,
    `bountyId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `partnerId` VARCHAR(191) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `status` ENUM('PENDING', 'PAID', 'FAILED') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `BountyPayments_bountyId_idx`(`bountyId`),
    INDEX `BountyPayments_userId_idx`(`userId`),
    INDEX `BountyPayments_partnerId_idx`(`partnerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Bounties_partnerId_idx` ON `Bounties`(`partnerId`);

-- CreateIndex
CREATE INDEX `Grants_partnerId_idx` ON `Grants`(`partnerId`);

-- CreateIndex
CREATE UNIQUE INDEX `Hackathon_partnerId_key` ON `Hackathon`(`partnerId`);

-- CreateIndex
CREATE INDEX `Hackathon_partnerId_idx` ON `Hackathon`(`partnerId`);

-- CreateIndex
CREATE INDEX `Jobs_partnerId_idx` ON `Jobs`(`partnerId`);

-- CreateIndex
CREATE INDEX `User_currentpartnerId_idx` ON `User`(`currentpartnerId`);
