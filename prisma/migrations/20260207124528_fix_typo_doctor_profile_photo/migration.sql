/*
  Warnings:

  - You are about to drop the column `prfilePhoto` on the `doctor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "doctor" DROP COLUMN "prfilePhoto",
ADD COLUMN     "profilePhoto" TEXT;
