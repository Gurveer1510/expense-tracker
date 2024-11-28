/*
  Warnings:

  - You are about to drop the column `left` on the `Budget` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "left",
ADD COLUMN     "spent" DOUBLE PRECISION NOT NULL DEFAULT 0;
