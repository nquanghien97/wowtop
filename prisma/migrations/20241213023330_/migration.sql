-- CreateTable
CREATE TABLE `DaneChallenge` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tiktok_link` VARCHAR(191) NOT NULL,
    `facebook_link` VARCHAR(191) NULL,
    `youtube_link` VARCHAR(191) NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NOT NULL,
    `ward` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
