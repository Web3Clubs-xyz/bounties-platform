-- CreateTable
CREATE TABLE `Jobs` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `skills` VARCHAR(191) NULL,
    `subskills` VARCHAR(191) NULL,
    `deadline` VARCHAR(191) NULL,
    `source` ENUM('NATIVE', 'IMPORT') NOT NULL DEFAULT 'NATIVE',
    `active` BOOLEAN NOT NULL DEFAULT true,
    `private` BOOLEAN NOT NULL DEFAULT false,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `experience` VARCHAR(191) NULL,
    `jobType` ENUM('parttime', 'fulltime', 'internship') NOT NULL DEFAULT 'fulltime',
    `maxSalary` DOUBLE NULL,
    `minSalary` DOUBLE NULL,
    `maxEq` DOUBLE NULL,
    `minEq` DOUBLE NULL,
    `location` VARCHAR(191) NULL,
    `sponsorId` VARCHAR(191) NOT NULL,
    `timezone` VARCHAR(191) NULL,
    `link` VARCHAR(191) NULL,
    `sourceDetails` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Jobs_slug_key`(`slug`),
    INDEX `Jobs_id_idx`(`id`),
    INDEX `Jobs_sponsorId_idx`(`sponsorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bounties` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `deadline` DATETIME(3) NULL,
    `eligibility` JSON NULL,
    `status` ENUM('OPEN', 'REVIEW', 'CLOSED') NOT NULL DEFAULT 'OPEN',
    `token` VARCHAR(191) NULL,
    `rewardAmount` DOUBLE NULL,
    `rewards` JSON NULL,
    `sponsorId` VARCHAR(191) NOT NULL,
    `pocId` VARCHAR(191) NOT NULL,
    `source` ENUM('NATIVE', 'IMPORT') NOT NULL DEFAULT 'NATIVE',
    `sourceDetails` JSON NULL,
    `isPublished` BOOLEAN NOT NULL DEFAULT false,
    `isFeatured` BOOLEAN NOT NULL DEFAULT false,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `isArchived` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `applicationLink` VARCHAR(191) NULL,
    `skills` JSON NULL,
    `type` ENUM('bounty', 'project', 'hackathon') NOT NULL DEFAULT 'bounty',
    `requirements` TEXT NULL,
    `totalPaymentsMade` INTEGER NULL DEFAULT 0,
    `totalWinnersSelected` INTEGER NULL DEFAULT 0,
    `isWinnersAnnounced` BOOLEAN NOT NULL DEFAULT false,
    `templateId` VARCHAR(191) NULL,
    `region` ENUM('GLOBAL', 'INDIA', 'VIETNAM', 'GERMANY', 'TURKEY', 'MEXICO', 'UK', 'UAE', 'NIGERIA', 'ISRAEL', 'BRAZIL', 'MALAYSIA', 'BALKAN', 'PHILIPPINES', 'JAPAN', 'FRANCE') NOT NULL DEFAULT 'GLOBAL',
    `pocSocials` VARCHAR(191) NULL,
    `hackathonprize` BOOLEAN NOT NULL DEFAULT false,
    `applicationType` ENUM('rolling', 'fixed') NOT NULL DEFAULT 'fixed',
    `timeToComplete` VARCHAR(191) NULL,
    `references` JSON NULL,
    `winners` JSON NULL,
    `referredBy` VARCHAR(191) NULL,
    `publishedAt` DATETIME(3) NULL,
    `isPrivate` BOOLEAN NOT NULL DEFAULT false,
    `hackathonId` VARCHAR(191) NULL,
    `usdValue` INTEGER NULL,
    `compensationType` ENUM('fixed', 'range', 'variable') NOT NULL DEFAULT 'fixed',
    `maxRewardAsk` INTEGER NULL,
    `minRewardAsk` INTEGER NULL,

    UNIQUE INDEX `Bounties_slug_key`(`slug`),
    INDEX `Bounties_id_slug_idx`(`id`, `slug`),
    INDEX `Bounties_sponsorId_idx`(`sponsorId`),
    INDEX `Bounties_pocId_idx`(`pocId`),
    INDEX `Bounties_templateId_idx`(`templateId`),
    INDEX `Bounties_hackathonId_idx`(`hackathonId`),
    INDEX `Bounties_isPublished_isPrivate_idx`(`isPublished`, `isPrivate`),
    INDEX `Bounties_deadline_updatedAt_idx`(`deadline`, `updatedAt`),
    INDEX `Bounties_isWinnersAnnounced_idx`(`isWinnersAnnounced`),
    INDEX `Bounties_title_idx`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BountiesTemplates` (
    `id` VARCHAR(191) NOT NULL,
    `templateTitle` VARCHAR(191) NOT NULL,
    `templateDescription` TEXT NULL,
    `title` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `requirements` TEXT NULL,
    `deadline` DATETIME(3) NULL,
    `eligibility` JSON NULL,
    `token` VARCHAR(191) NULL,
    `rewardAmount` DOUBLE NULL,
    `rewards` JSON NULL,
    `color` VARCHAR(191) NULL,
    `emoji` VARCHAR(191) NULL,
    `isFeatured` BOOLEAN NOT NULL DEFAULT false,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `isArchived` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `skills` JSON NULL,
    `type` ENUM('bounty', 'project', 'hackathon') NOT NULL DEFAULT 'bounty',

    INDEX `BountiesTemplates_id_idx`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` VARCHAR(191) NOT NULL,
    `message` VARCHAR(1000) NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `listingType` ENUM('BOUNTY', 'SUBMISSION') NOT NULL DEFAULT 'BOUNTY',
    `listingId` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `isArchived` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `replyToId` VARCHAR(191) NULL,
    `submissionId` VARCHAR(191) NULL,
    `type` ENUM('NORMAL', 'SUBMISSION', 'DEADLINE_EXTENSION', 'WINNER_ANNOUNCEMENT') NOT NULL DEFAULT 'NORMAL',

    INDEX `Comment_id_listingId_idx`(`id`, `listingId`),
    INDEX `Comment_authorId_idx`(`authorId`),
    INDEX `Comment_replyToId_idx`(`replyToId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Grants` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `shortDescription` VARCHAR(1000) NULL,
    `token` VARCHAR(191) NULL,
    `rewardAmount` INTEGER NULL,
    `link` VARCHAR(191) NULL,
    `source` ENUM('NATIVE', 'IMPORT') NOT NULL DEFAULT 'NATIVE',
    `sponsorId` VARCHAR(191) NOT NULL,
    `pocId` VARCHAR(191) NOT NULL,
    `isPublished` BOOLEAN NOT NULL DEFAULT false,
    `isFeatured` BOOLEAN NOT NULL DEFAULT false,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `isArchived` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `skills` JSON NULL,
    `logo` VARCHAR(191) NULL,
    `region` ENUM('GLOBAL', 'INDIA', 'VIETNAM', 'GERMANY', 'TURKEY', 'MEXICO', 'UK', 'UAE', 'NIGERIA', 'ISRAEL', 'BRAZIL', 'MALAYSIA', 'BALKAN', 'PHILIPPINES', 'JAPAN', 'FRANCE') NOT NULL DEFAULT 'GLOBAL',

    UNIQUE INDEX `Grants_slug_key`(`slug`),
    INDEX `Grants_id_slug_idx`(`id`, `slug`),
    INDEX `Grants_pocId_idx`(`pocId`),
    INDEX `Grants_sponsorId_idx`(`sponsorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Submission` (
    `id` VARCHAR(191) NOT NULL,
    `link` VARCHAR(500) NULL,
    `tweet` VARCHAR(500) NULL,
    `eligibilityAnswers` JSON NULL,
    `userId` VARCHAR(191) NOT NULL,
    `listingId` VARCHAR(191) NOT NULL,
    `isWinner` BOOLEAN NOT NULL DEFAULT false,
    `winnerPosition` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `isArchived` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `like` JSON NULL,
    `likeCount` INTEGER NOT NULL DEFAULT 0,
    `isPaid` BOOLEAN NOT NULL DEFAULT false,
    `paymentDetails` JSON NULL,
    `otherInfo` VARCHAR(2000) NULL,
    `ask` INTEGER NULL,
    `label` ENUM('Unreviewed', 'Reviewed', 'Shortlisted', 'Spam') NOT NULL DEFAULT 'Unreviewed',
    `rewardInUSD` INTEGER NOT NULL DEFAULT 0,

    INDEX `Submission_id_listingId_idx`(`id`, `listingId`),
    INDEX `Submission_userId_idx`(`userId`),
    INDEX `Submission_listingId_idx`(`listingId`),
    INDEX `Submission_createdAt_idx`(`createdAt`),
    INDEX `Submission_isWinner_idx`(`isWinner`),
    INDEX `Submission_createdAt_isWinner_idx`(`createdAt`, `isWinner`),
    INDEX `Submission_createdAt_listingId_idx`(`createdAt`, `listingId`),
    INDEX `Submission_likeCount_idx`(`likeCount`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Otp` (
    `_id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `otp` INTEGER NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sponsors` (
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

    UNIQUE INDEX `Sponsors_name_key`(`name`),
    UNIQUE INDEX `Sponsors_slug_key`(`slug`),
    INDEX `Sponsors_id_slug_idx`(`id`, `slug`),
    INDEX `Sponsors_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    INDEX `Account_userId_idx`(`userId`),
    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    INDEX `Session_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `publicKey` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NULL,
    `photo` VARCHAR(191) NULL,
    `firstName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `isVerified` BOOLEAN NOT NULL DEFAULT false,
    `role` VARCHAR(191) NOT NULL DEFAULT 'USER',
    `totalEarnedInUSD` INTEGER NOT NULL DEFAULT 0,
    `isTalentFilled` BOOLEAN NOT NULL DEFAULT false,
    `interests` VARCHAR(191) NULL,
    `bio` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `discord` VARCHAR(191) NULL,
    `github` VARCHAR(191) NULL,
    `linkedin` VARCHAR(191) NULL,
    `website` VARCHAR(191) NULL,
    `telegram` VARCHAR(191) NULL,
    `community` VARCHAR(191) NULL,
    `experience` VARCHAR(191) NULL,
    `superteamLevel` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `cryptoExperience` VARCHAR(191) NULL,
    `workPrefernce` VARCHAR(191) NULL,
    `currentEmployer` VARCHAR(191) NULL,
    `pow` VARCHAR(2000) NULL,
    `notifications` JSON NULL,
    `private` BOOLEAN NOT NULL DEFAULT false,
    `skills` JSON NULL,
    `currentSponsorId` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `hackathonId` VARCHAR(191) NULL,
    `featureModalShown` BOOLEAN NOT NULL DEFAULT false,
    `surveysShown` JSON NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_username_key`(`username`),
    INDEX `User_email_publicKey_username_idx`(`email`, `publicKey`, `username`),
    INDEX `User_currentSponsorId_idx`(`currentSponsorId`),
    INDEX `User_hackathonId_idx`(`hackathonId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TalentRankings` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `skill` ENUM('DEVELOPMENT', 'DESIGN', 'CONTENT', 'OTHER', 'ALL') NOT NULL DEFAULT 'ALL',
    `timeframe` ENUM('THIS_YEAR', 'LAST_30_DAYS', 'LAST_7_DAYS', 'ALL_TIME') NOT NULL DEFAULT 'ALL_TIME',
    `rank` INTEGER NOT NULL,
    `submissions` INTEGER NOT NULL DEFAULT 0,
    `winRate` INTEGER NOT NULL DEFAULT 0,
    `wins` INTEGER NOT NULL DEFAULT 0,
    `totalEarnedInUSD` INTEGER NOT NULL,

    INDEX `TalentRankings_userId_skill_timeframe_idx`(`userId`, `skill`, `timeframe`),
    UNIQUE INDEX `TalentRankings_userId_skill_timeframe_key`(`userId`, `skill`, `timeframe`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PoW` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `skills` JSON NULL,
    `link` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `subSkills` JSON NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `like` JSON NULL,
    `likeCount` INTEGER NOT NULL DEFAULT 0,

    INDEX `PoW_userId_idx`(`userId`),
    INDEX `PoW_createdAt_idx`(`createdAt`),
    INDEX `PoW_likeCount_idx`(`likeCount`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmailSettings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,

    INDEX `EmailSettings_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserSponsors` (
    `userId` VARCHAR(191) NOT NULL,
    `sponsorId` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'MEMBER') NOT NULL DEFAULT 'MEMBER',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `UserSponsors_userId_sponsorId_idx`(`userId`, `sponsorId`),
    INDEX `UserSponsors_sponsorId_idx`(`sponsorId`),
    PRIMARY KEY (`userId`, `sponsorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserInvites` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senderId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `sponsorId` VARCHAR(191) NOT NULL,
    `memberType` ENUM('ADMIN', 'MEMBER') NOT NULL DEFAULT 'MEMBER',

    INDEX `UserInvites_id_idx`(`id`),
    INDEX `UserInvites_senderId_idx`(`senderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emailLogs` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `type` ENUM('BOUNTY_REVIEW', 'BOUNTY_DEADLINE', 'BOUNTY_DEADLINE_WEEK', 'BOUNTY_CLOSE_DEADLINE', 'NO_VERIFICATION', 'NO_ACTIVITY', 'NO_REVIEW_SPONSOR_1', 'NO_REVIEW_SPONSOR_2') NOT NULL,
    `bountyId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubscribeBounty` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `bountyId` VARCHAR(191) NOT NULL,
    `isArchived` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `SubscribeBounty_bountyId_idx`(`bountyId`),
    INDEX `SubscribeBounty_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hackathon` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `sponsorId` VARCHAR(191) NULL,
    `deadline` DATETIME(3) NULL,
    `startDate` DATETIME(3) NULL,
    `description` VARCHAR(191) NOT NULL,
    `altLogo` VARCHAR(191) NULL,
    `announceDate` DATETIME(3) NULL,
    `eligibility` JSON NULL,

    UNIQUE INDEX `Hackathon_slug_key`(`slug`),
    UNIQUE INDEX `Hackathon_sponsorId_key`(`sponsorId`),
    INDEX `Hackathon_sponsorId_idx`(`sponsorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnsubscribedEmail` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UnsubscribedEmail_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
