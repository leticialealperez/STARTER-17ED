-- CreateTable
CREATE TABLE "addresses" (
    "id" UUID NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "address_number" VARCHAR(255) NOT NULL,
    "zip_code" VARCHAR(8) NOT NULL,
    "complement" VARCHAR(255),
    "neighborhood" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "uf" VARCHAR(2) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,
    "deleted_at" TIMESTAMP,
    "student_id" UUID NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "addresses_student_id_key" ON "addresses"("student_id");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
