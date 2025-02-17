import process from 'process';
import readline from 'readline';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question('Nama: ', (nama) => {
  console.log(`Halo, ${nama}!`);
  input.close();
});
