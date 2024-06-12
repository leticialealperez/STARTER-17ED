/*
  Warnings:

  - Added the required column `teste` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "teste" VARCHAR(200) NOT NULL;
