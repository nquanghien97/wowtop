/*
  Warnings:

  - You are about to drop the column `productName` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `productName`,
    DROP COLUMN `quantity`;
