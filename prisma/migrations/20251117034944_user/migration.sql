/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `portfolio` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `portfolio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `portfolio` ADD COLUMN `user_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` TIMESTAMP(6) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `portfolio_user_id_key` ON `portfolio`(`user_id`);

-- CreateIndex
CREATE INDEX `Portfolio_user_id_fkey` ON `portfolio`(`user_id`);

-- AddForeignKey
ALTER TABLE `portfolio` ADD CONSTRAINT `Portfolio_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
