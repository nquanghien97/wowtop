-- AlterTable
ALTER TABLE `exchangedgift` ADD COLUMN `delivered_at` DATETIME(3) NULL,
    ADD COLUMN `status` ENUM('PENDING', 'SHIPPING', 'COMPLETED', 'CANCELLED') NOT NULL DEFAULT 'PENDING';