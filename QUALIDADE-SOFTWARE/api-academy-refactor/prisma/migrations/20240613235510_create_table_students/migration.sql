-- CreateTable
CREATE TABLE "students" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "document_identification" VARCHAR(11) NOT NULL,
    "email_address" VARCHAR(255) NOT NULL,
    "age" SMALLINT,
    "password" TEXT NOT NULL,
    "auth_token" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,
    "deleted_at" TIMESTAMP NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "students_document_identification_key" ON "students"("document_identification");

-- CreateIndex
CREATE UNIQUE INDEX "students_email_address_key" ON "students"("email_address");
