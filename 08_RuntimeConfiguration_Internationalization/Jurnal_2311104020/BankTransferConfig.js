import { readFile, writeFile, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default class BankTransferConfig {
  constructor() {
    this.configPath = join(__dirname, 'bank_transfer_config.json');
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
        lang: 'en',
        transfer: {
          threshold: 25000000,
          low_fee: 6500,
          high_fee: 15000,
        },
        methods: ['RTO (real-time)', 'SKN', 'RTGS', 'BI FAST'],
        confirmation: {
          en: 'yes',
          id: 'ya',
        },
      };
      await this.saveConfig();
    }
    return this.config;
  }

  async saveConfig() {
    await writeFile(this.configPath, JSON.stringify(this.config, null, 2));
  }

  getLanguage() {
    return this.config.lang;
  }

  getThreshold() {
    return this.config.transfer.threshold;
  }

  getLowFee() {
    return this.config.transfer.low_fee;
  }

  getHighFee() {
    return this.config.transfer.high_fee;
  }

  getMethods() {
    return this.config.methods;
  }

  getConfirmation(lang) {
    return this.config.confirmation[lang];
  }

  async changeLanguage(lang) {
    if (lang === 'en' || lang === 'id') {
      this.config.lang = lang;
      await this.saveConfig();
    } else {
      throw new Error('Invalid language selection');
    }
  }
}
