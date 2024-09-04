/*
  Warnings:

  - A unique constraint covering the columns `[studentId,classId]` on the table `enrollments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "StudentType" AS ENUM ('M', 'T', 'F');

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "type" "StudentType" NOT NULL DEFAULT 'M';

-- CreateIndex
CREATE UNIQUE INDEX "enrollments_studentId_classId_key" ON "enrollments"("studentId", "classId");
