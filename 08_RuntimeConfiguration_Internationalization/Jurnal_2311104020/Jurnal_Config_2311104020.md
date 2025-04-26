# 📘 Modul 8 - Jurnal

### 2311104020<br> Raihan Sastra Wibyanto<br> SE-07-01

##  Source Code <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>
### File JS
main.js
```js
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import BankTransferConfig from './BankTransferConfig.js';

const rl = readline.createInterface({ input, output });

async function main() {
  const config = new BankTransferConfig();
  await config.loadConfig();

  const lang = config.getLanguage();
  const amountPrompt = lang === 'en' ? 'Please insert the amount of money to transfer: ' : 'Masukkan jumlah uang yang akan di-transfer: ';

  const amount = await rl.question(amountPrompt);
  const amountNum = parseInt(amount.replace(/\D/g, ''));

  const threshold = config.getThreshold();
  const transferFee = amountNum <= threshold ? config.getLowFee() : config.getHighFee();

  const totalAmount = amountNum + transferFee;

  if (lang === 'en') {
    console.log(`Transfer fee = ${transferFee.toLocaleString()}`);
    console.log(`Total amount = ${totalAmount.toLocaleString()}`);
  } else {
    console.log(`Biaya transfer = ${transferFee.toLocaleString()}`);
    console.log(`Total biaya = ${totalAmount.toLocaleString()}`);
  }

  const methodPrompt = lang === 'en' ? 'Select transfer method:\n' : 'Pilih metode transfer:\n';

  const methods = config.getMethods();
  console.log(methodPrompt);
  methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method}`);
  });

  const methodChoice = await rl.question('\n> ');
  const chosenMethod = methods[parseInt(methodChoice) - 1];

  const confirmationWord = config.getConfirmation(lang);
  const confirmationPrompt = lang === 'en' ? `Please type "${confirmationWord}" to confirm the transaction: ` : `Ketik "${confirmationWord}" untuk mengkonfirmasi transaksi: `;

  const confirmation = await rl.question(confirmationPrompt);

  if (confirmation.toLowerCase() === confirmationWord.toLowerCase()) {
    console.log(lang === 'en' ? 'The transfer is completed' : 'Proses transfer berhasil');
  } else {
    console.log(lang === 'en' ? 'Transfer is cancelled' : 'Transfer dibatalkan');
  }

  rl.close();
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
```
BankTransferConfig.js
```js
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
```
### File JSON
bank_transfer_config.json
```json
{
  "lang": "en",
  "transfer": {
    "threshold": 25000000,
    "low_fee": 6500,
    "high_fee": 15000
  },
  "methods": ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
  "confirmation": {
    "en": "yes",
    "id": "ya"
  }
}

```

## Output
Hasil BankTransferConfig:<br>
contoh transfer lewat RTO<br>
<img src="https://github.com/user-attachments/assets/84ad5705-37a2-4958-aa54-26af59e5a21d" width=300><br>
contoh transfer lewat SKN<br>
<img src="https://github.com/user-attachments/assets/fda67338-f5ad-4814-98d7-37b2c482ba0c" width=300><br>
contoh transfer lewat RTGS<br>
<img src="https://github.com/user-attachments/assets/b7074fce-44f6-477d-b21d-a1fce552b5d8" width=300><br>
contoh transfer lewat BI-FAST<br>
<img src="https://github.com/user-attachments/assets/3b57a7aa-822a-45d9-add6-aad58652834b" width=300><br>


## Penjelasan
### BankTransferConfig
<p>
Program di atas mengimplementasikan sistem konfigurasi transfer bank dengan menggunakan parsing JSON untuk mengelola berbagai parameter transaksi. Proses parsing dilakukan terhadap file bank_transfer_config.json yang berisi konfigurasi bahasa, nilai threshold transfer, biaya transfer, metode pembayaran, serta kata konfirmasi dalam berbagai bahasa.<br>
  
Kelas BankTransferConfig bertindak sebagai pengelola konfigurasi utama dengan metode loadConfig() yang melakukan parsing data JSON menggunakan JSON.parse() setelah membaca file. Jika file tidak ditemukan, sistem secara otomatis membuat konfigurasi default yang kemudian dikonversi ke format JSON menggunakan JSON.stringify(). Proses parsing dua arah ini memungkinkan konversi antara representasi teks JSON dan objek JavaScript yang dapat dimanipulasi secara programatik.<br>

Pada aplikasi utama, konfigurasi yang telah diparsing digunakan untuk berbagai keperluan: (1) menentukan bahasa antarmuka, (2) menghitung biaya transfer berdasarkan nilai threshold, (3) menampilkan daftar metode transfer, dan (4) menyediakan mekanisme konfirmasi transaksi dalam multi-bahasa. Metode changeLanguage() menunjukkan fleksibilitas sistem dalam memodifikasi dan menyimpan ulang konfigurasi ke file JSON secara dinamis.<br>

Implementasi ini memberikan beberapa keunggulan penting: (1) sentralisasi pengaturan dalam file eksternal yang mudah dimodifikasi, (2) dukungan multi-bahasa yang terkelola dengan baik, (3) mekanisme fallback otomatis ketika file konfigurasi tidak tersedia, serta (4) pemisahan yang jelas antara logika bisnis dan konfigurasi aplikasi. Pendekatan parsing JSON seperti ini sangat sesuai untuk aplikasi perbankan yang membutuhkan fleksibilitas tinggi dalam penyesuaian parameter operasional.
</p>
