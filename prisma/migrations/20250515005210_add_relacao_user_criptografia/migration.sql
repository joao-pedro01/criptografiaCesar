/*
  Warnings:

  - Added the required column `userId` to the `Criptografia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `criptografia` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Criptografia` ADD CONSTRAINT `Criptografia_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
