import { readFile } from 'fs/promises';

class DataMataKuliah_2311104020 {
  static async ReadJSON() {
    const rawData = await readFile('./tp7_2_2311104020.json', 'utf-8');
    const data = JSON.parse(rawData);

    console.log('Daftar mata kuliah yang diambil:');
    data.mata_kuliah.forEach((mk, index) => {
      console.log(`MK ${index + 1} ${mk.kode} - ${mk.nama}`);
    });
  }
}

DataMataKuliah_2311104020.ReadJSON();
