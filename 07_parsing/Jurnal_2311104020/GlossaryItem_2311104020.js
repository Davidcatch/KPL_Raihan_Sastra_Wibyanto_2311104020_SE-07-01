import { readFile } from 'fs/promises';

class GlossaryItem_2311104020 {
  static async ReadJSON() {
    const filePath = './jurnal7_3_2311104020.json';

    try {
      const data = await readFile(filePath, 'utf8');
      const jsonData = JSON.parse(data);
      const glossEntry = jsonData.glossary.GlossDiv.GlossList.GlossEntry;

      console.log('=== Hasil Deserialisasi GlossEntry ===');
      console.log(glossEntry);
    } catch (err) {
      console.error('Gagal membaca atau parsing JSON:', err);
    }
  }
}

GlossaryItem_2311104020.ReadJSON();
