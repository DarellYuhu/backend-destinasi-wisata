/*
  Warnings:

  - You are about to drop the column `rute` on the `objek_wisata` table. All the data in the column will be lost.
  - Added the required column `waktu_operasional` to the `objek_wisata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "objek_wisata" DROP COLUMN "rute",
ADD COLUMN     "waktu_operasional" TEXT NOT NULL;
