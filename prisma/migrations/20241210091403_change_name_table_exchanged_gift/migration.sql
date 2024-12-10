/*
  Warnings:

  - You are about to drop the `exchangegift` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `exchangegift` DROP FOREIGN KEY `ExchangeGift_gift_id_fkey`;

-- DropForeignKey
ALTER TABLE `exchangegift` DROP FOREIGN KEY `ExchangeGift_user_id_fkey`;

-- DropTable
DROP TABLE `exchangegift`;

-- CreateTable
CREATE TABLE `ExchangedGift` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gift_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ExchangedGift` ADD CONSTRAINT `ExchangedGift_gift_id_fkey` FOREIGN KEY (`gift_id`) REFERENCES `Gift`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExchangedGift` ADD CONSTRAINT `ExchangedGift_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
