-- DropForeignKey
ALTER TABLE "gambar" DROP CONSTRAINT "gambar_objek_wisata_id_fkey";

-- AddForeignKey
ALTER TABLE "gambar" ADD CONSTRAINT "gambar_objek_wisata_id_fkey" FOREIGN KEY ("objek_wisata_id") REFERENCES "objek_wisata"("id") ON DELETE CASCADE ON UPDATE CASCADE;
