/*
  Warnings:

  - The primary key for the `portfolio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `portfolio` table. All the data in the column will be lost.
  - You are about to alter the column `portfolio_id` on the `portfolio` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `nama` on the `portfolio` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `linkedin` on the `portfolio` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `github` on the `portfolio` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `nomor_telepon` on the `portfolio` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - The primary key for the `project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `project_id` on the `project` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `portfolio_id` on the `project` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `judul_project` on the `project` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - The primary key for the `skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `skill_id` on the `skill` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `portfolio_id` on the `skill` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `nama_skill` on the `skill` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bio` to the `portfolio` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `portfolio` DROP FOREIGN KEY `Portfolio_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `Project_portfolio_id_fkey`;

-- DropForeignKey
ALTER TABLE `skill` DROP FOREIGN KEY `Skill_portfolio_id_fkey`;

-- DropIndex
DROP INDEX `Portfolio_user_id_fkey` ON `portfolio`;

-- AlterTable
ALTER TABLE `portfolio` DROP PRIMARY KEY,
    DROP COLUMN `user_id`,
    ADD COLUMN `bio` TEXT NOT NULL,
    ADD COLUMN `deskripsi` TEXT NULL,
    ADD COLUMN `email` VARCHAR(100) NULL,
    ADD COLUMN `lokasi` TEXT NULL,
    MODIFY `portfolio_id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `nama` VARCHAR(100) NOT NULL,
    MODIFY `linkedin` VARCHAR(100) NULL,
    MODIFY `github` VARCHAR(100) NULL,
    MODIFY `nomor_telepon` VARCHAR(15) NULL,
    ADD PRIMARY KEY (`portfolio_id`);

-- AlterTable
ALTER TABLE `project` DROP PRIMARY KEY,
    MODIFY `project_id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `portfolio_id` INTEGER NOT NULL,
    MODIFY `judul_project` VARCHAR(100) NOT NULL,
    MODIFY `deskripsi` TEXT NULL,
    ADD PRIMARY KEY (`project_id`);

-- AlterTable
ALTER TABLE `skill` DROP PRIMARY KEY,
    MODIFY `skill_id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `portfolio_id` INTEGER NOT NULL,
    MODIFY `nama_skill` VARCHAR(100) NOT NULL,
    ADD PRIMARY KEY (`skill_id`);

-- DropTable
DROP TABLE `user`;

-- AddForeignKey
ALTER TABLE `project` ADD CONSTRAINT `Project_portfolio_id_fkey` FOREIGN KEY (`portfolio_id`) REFERENCES `portfolio`(`portfolio_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `skill` ADD CONSTRAINT `Skill_portfolio_id_fkey` FOREIGN KEY (`portfolio_id`) REFERENCES `portfolio`(`portfolio_id`) ON DELETE CASCADE ON UPDATE CASCADE;
