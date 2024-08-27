-- CreateTable
CREATE TABLE "assessments" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "rate" DECIMAL(3,1) NOT NULL,
    "deadline" DATE NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,
    "deleted_at" TIMESTAMP,
    "student_id" UUID NOT NULL,

    CONSTRAINT "assessments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "assessments" ADD CONSTRAINT "assessments_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
