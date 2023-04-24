-- DropForeignKey
ALTER TABLE `SavedBooks` DROP FOREIGN KEY `SavedBooks_bookId_fkey`;

-- DropForeignKey
ALTER TABLE `SavedBooks` DROP FOREIGN KEY `SavedBooks_userId_fkey`;

-- AlterTable
ALTER TABLE `Books` MODIFY `summary` LONGTEXT NOT NULL;

-- RenameIndex
ALTER TABLE `SavedBooks` RENAME INDEX `SavedBooks_bookId_fkey` TO `SavedBooks_bookId_idx`;

-- RenameIndex
ALTER TABLE `SavedBooks` RENAME INDEX `SavedBooks_userId_fkey` TO `SavedBooks_userId_idx`;
