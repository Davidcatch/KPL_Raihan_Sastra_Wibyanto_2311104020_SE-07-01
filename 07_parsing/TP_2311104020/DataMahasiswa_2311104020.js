import { readFile } from 'fs/promises';

class DataMahasiswa_2311104020 {
  static async ReadJSON() {
    const rawData = await readFile('./tp7_1_2311104020.json', 'utf-8');
    const data = JSON.parse(rawData);

    console.log(`Nama ${data.nama} dengan nim ${data.nim} dari fakultas ${data.fakultas}`);
  }
}

DataMahasiswa_2311104020.ReadJSON();
