-- CreateTable
CREATE TABLE `User` (
    `user_id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Portfolio` (
    `portfolio_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NOT NULL,
    `linkedin` VARCHAR(191) NULL,
    `github` VARCHAR(191) NULL,
    `nomor_telepon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`portfolio_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `skill_id` VARCHAR(191) NOT NULL,
    `portfolio_id` VARCHAR(191) NOT NULL,
    `nama_skill` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`skill_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `project_id` VARCHAR(191) NOT NULL,
    `portfolio_id` VARCHAR(191) NOT NULL,
    `judul_project` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NULL,
    `cover` VARCHAR(191) NULL,

    PRIMARY KEY (`project_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Portfolio` ADD CONSTRAINT `Portfolio_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_portfolio_id_fkey` FOREIGN KEY (`portfolio_id`) REFERENCES `Portfolio`(`portfolio_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_portfolio_id_fkey` FOREIGN KEY (`portfolio_id`) REFERENCES `Portfolio`(`portfolio_id`) ON DELETE CASCADE ON UPDATE CASCADE;
