/*
  Warnings:

  - Added the required column `DRT` to the `Pessoa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Pessoa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Pessoa` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pessoa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "DRT" TEXT NOT NULL,
    "role" TEXT NOT NULL
);
INSERT INTO "new_Pessoa" ("email", "id", "name") SELECT "email", "id", "name" FROM "Pessoa";
DROP TABLE "Pessoa";
ALTER TABLE "new_Pessoa" RENAME TO "Pessoa";
CREATE UNIQUE INDEX "Pessoa_email_key" ON "Pessoa"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
