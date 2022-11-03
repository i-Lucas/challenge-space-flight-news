/*
  Warnings:

  - Added the required column `imageUrl` to the `articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newsSite` to the `articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publishedAt` to the `articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "articles" ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "newsSite" TEXT NOT NULL,
ADD COLUMN     "publishedAt" TEXT NOT NULL,
ADD COLUMN     "summary" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
