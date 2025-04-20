import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import CovidConfig from './CovidConfig.js';

const rl = readline.createInterface({ input, output });

async function main() {
  console.log('=== Aplikasi Pemeriksaan COVID ===');

  const config = new CovidConfig();
  await config.loadConfig();

  // Panggil method UbahSatuan
  await config.ubahSatuan();

  const satuan = config.getSatuanSuhu();
  const suhuPertanyaan = `Berapa suhu badan anda saat ini? Dalam nilai ${satuan}: `;
  const suhu = await rl.question(suhuPertanyaan);
  const suhuFloat = parseFloat(suhu);

  const hariPertanyaan = 'Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ';
  const hari = await rl.question(hariPertanyaan);
  const hariInt = parseInt(hari);

  let suhuValid = false;
  if (satuan === 'celcius') {
    suhuValid = suhuFloat >= 36.5 && suhuFloat <= 37.5;
  } else {
    suhuValid = suhuFloat >= 97.7 && suhuFloat <= 99.5;
  }

  const hariValid = hariInt < config.getBatasHariDeman();

  if (suhuValid && hariValid) {
    console.log(config.getPesanDiterima());
  } else {
    console.log(config.getPesanDitolak());
  }

  rl.close();
}

main().catch((err) => {
  console.error('Terjadi error:', err);
  process.exit(1);
});
