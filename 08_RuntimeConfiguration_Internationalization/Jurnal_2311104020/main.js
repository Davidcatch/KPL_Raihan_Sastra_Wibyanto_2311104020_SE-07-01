import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import BankTransferConfig from './BankTransferConfig.js';

const rl = readline.createInterface({ input, output });

async function main() {
  const config = new BankTransferConfig();
  await config.loadConfig();

  // Tampilkan prompt berdasarkan bahasa
  const lang = config.getLanguage();
  const amountPrompt = lang === 'en' ? 'Please insert the amount of money to transfer: ' : 'Masukkan jumlah uang yang akan di-transfer: ';

  const amount = await rl.question(amountPrompt);
  const amountNum = parseInt(amount.replace(/\D/g, ''));

  // Hitung biaya transfer
  const threshold = config.getThreshold();
  const transferFee = amountNum <= threshold ? config.getLowFee() : config.getHighFee();

  const totalAmount = amountNum + transferFee;

  // Tampilkan biaya transfer
  if (lang === 'en') {
    console.log(`Transfer fee = ${transferFee.toLocaleString()}`);
    console.log(`Total amount = ${totalAmount.toLocaleString()}`);
  } else {
    console.log(`Biaya transfer = ${transferFee.toLocaleString()}`);
    console.log(`Total biaya = ${totalAmount.toLocaleString()}`);
  }

  // Tampilkan metode transfer
  const methodPrompt = lang === 'en' ? 'Select transfer method:\n' : 'Pilih metode transfer:\n';

  const methods = config.getMethods();
  console.log(methodPrompt);
  methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method}`);
  });

  const methodChoice = await rl.question('\n> ');
  const chosenMethod = methods[parseInt(methodChoice) - 1];

  // Konfirmasi transaksi
  const confirmationWord = config.getConfirmation(lang);
  const confirmationPrompt = lang === 'en' ? `Please type "${confirmationWord}" to confirm the transaction: ` : `Ketik "${confirmationWord}" untuk mengkonfirmasi transaksi: `;

  const confirmation = await rl.question(confirmationPrompt);

  // Hasil transaksi
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
