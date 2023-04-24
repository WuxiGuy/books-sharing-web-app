/*
  Warnings:

  - You are about to drop the `ReadBooks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ReadBooks` DROP FOREIGN KEY `ReadBooks_bookId_fkey`;

-- DropForeignKey
ALTER TABLE `ReadBooks` DROP FOREIGN KEY `ReadBooks_userId_fkey`;

-- DropTable
DROP TABLE `ReadBooks`;
