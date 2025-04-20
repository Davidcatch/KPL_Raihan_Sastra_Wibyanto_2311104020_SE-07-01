import { readFile, writeFile, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default class CovidConfig {
  constructor() {
    this.configPath = join(__dirname, 'covid_config.json');
    this.config = null;
  }

  async loadConfig() {
    try {
      await access(this.configPath);
      const rawData = await readFile(this.configPath, 'utf-8');
      this.config = JSON.parse(rawData);
    } catch (error) {
      // Buat config default jika file tidak ada
      this.config = {
        satuan_suhu: 'celcius',
        batas_hari_deman: 14,
        pesan_ditolak: 'Anda tidak diperbolehkan masuk ke dalam gedung ini',
        pesan_diterima: 'Anda dipersilahkan untuk masuk ke dalam gedung ini',
      };
      await this.simpanConfig();
    }
    return this.config;
  }

  getSatuanSuhu() {
    return this.config.satuan_suhu;
  }

  getBatasHariDeman() {
    return this.config.batas_hari_deman;
  }

  getPesanDitolak() {
    return this.config.pesan_ditolak;
  }

  getPesanDiterima() {
    return this.config.pesan_diterima;
  }

  async ubahSatuan() {
    if (this.config.satuan_suhu === 'celcius') {
      this.config.satuan_suhu = 'fahrenheit';
    } else {
      this.config.satuan_suhu = 'celcius';
    }
    await this.simpanConfig();
    console.log(`Satuan suhu telah diubah ke ${this.config.satuan_suhu}`);
  }

  async simpanConfig() {
    await writeFile(this.configPath, JSON.stringify(this.config, null, 2));
  }
}
