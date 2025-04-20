import { readFile } from 'fs/promises';

class DataMahasiswa_2311104020 {
  static async ReadJSON() {
    const rawData = await readFile('./jurnal7_1_2311104020.json', 'utf-8');
    const data = JSON.parse(rawData);

    console.log('=== Data Mahasiswa ===');
    console.log(`Nama     : ${data.nama}`);
    console.log(`NIM      : ${data.nim}`);
    console.log(`Kelas    : ${data.kelas}`);
    console.log(`Prodi    : ${data.prodi}`);
    console.log(`Fakultas : ${data.fakultas}`);
  }
}

DataMahasiswa_2311104020.ReadJSON();
