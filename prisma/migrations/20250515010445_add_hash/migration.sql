/*
  Warnings:

  - A unique constraint covering the columns `[hash]` on the table `Criptografia` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hash` to the `Criptografia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `criptografia` ADD COLUMN `hash` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Criptografia_hash_key` ON `Criptografia`(`hash`);
