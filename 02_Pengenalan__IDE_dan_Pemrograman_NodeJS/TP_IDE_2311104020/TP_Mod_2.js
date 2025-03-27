import process from 'process';
import readline from 'readline';

//  Soal A
// const input = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// input.question('Masukkan satu huruf (A-Z): ', (huruf) => {
//   if (huruf.length === 1 && huruf >= 'A' && huruf <= 'Z') {
//     const vokal = ['A', 'I', 'U', 'E', 'O'];

//     if (vokal.includes(huruf)) {
//       console.log(`Huruf ${huruf} merupakan huruf vokal`);
//     } else {
//       console.log(`Huruf ${huruf} merupakan huruf konsonan`);
//     }
//   } else {
//     console.log('Input tidak valid! Masukkan satu huruf kapital (A-Z).');
//   }

//   input.close();
// });

// Soal B
const angkaGenap = [2, 4, 6, 8, 10];

angkaGenap.forEach((angka, index) => {
  console.log(`Angka genap ${index + 1} : ${angka}`);
});
