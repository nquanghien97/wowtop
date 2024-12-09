-- AlterTable
ALTER TABLE `accumulation_code` ADD COLUMN `used_at` DATETIME(3) NULL,
    ADD COLUMN `used_by_user_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Accumulation_code` ADD CONSTRAINT `Accumulation_code_used_by_user_id_fkey` FOREIGN KEY (`used_by_user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
