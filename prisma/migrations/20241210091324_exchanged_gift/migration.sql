/*
  Warnings:

  - You are about to drop the column `exchange_time` on the `gift` table. All the data in the column will be lost.
  - You are about to drop the column `exchange_user_id` on the `gift` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `gift` DROP FOREIGN KEY `Gift_exchange_user_id_fkey`;

-- AlterTable
ALTER TABLE `gift` DROP COLUMN `exchange_time`,
    DROP COLUMN `exchange_user_id`;

-- CreateTable
CREATE TABLE `ExchangeGift` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gift_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ExchangeGift` ADD CONSTRAINT `ExchangeGift_gift_id_fkey` FOREIGN KEY (`gift_id`) REFERENCES `Gift`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExchangeGift` ADD CONSTRAINT `ExchangeGift_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
