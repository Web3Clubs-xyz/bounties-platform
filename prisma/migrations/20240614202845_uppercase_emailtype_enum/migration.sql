/*
  Warnings:

  - The values [NO_REVIEW_partner_1,NO_REVIEW_partner_2] on the enum `emailLogs_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `emailLogs` MODIFY `type` ENUM('BOUNTY_REVIEW', 'BOUNTY_DEADLINE', 'BOUNTY_DEADLINE_WEEK', 'BOUNTY_CLOSE_DEADLINE', 'NO_VERIFICATION', 'NO_ACTIVITY', 'NO_REVIEW_PARTNER_1', 'NO_REVIEW_PARTNER_2') NOT NULL;
