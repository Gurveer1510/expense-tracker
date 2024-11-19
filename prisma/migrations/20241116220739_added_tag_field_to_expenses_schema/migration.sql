/*
  Warnings:

  - Added the required column `tag` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "tag" TEXT NOT NULL;
