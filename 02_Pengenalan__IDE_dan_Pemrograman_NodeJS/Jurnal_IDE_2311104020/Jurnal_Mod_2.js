import process from 'process';
import readline from 'readline';

// Soal A
// const input = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// input.question('Masukkan nama Anda: ', (nama) => {
//   console.log(`Selamat datang, ${nama}!`);
//   input.close();
// });

// Soal B
// const arr = Array.from({ length: 50 }, (_, index) => index);

// arr.forEach((num) => {
//   if (num % 2 === 0 && num % 3 === 0) {
//     console.log(`${num} #$#$`);
//   } else if (num % 2 === 0) {
//     console.log(`${num} ##`);
//   } else if (num % 3 === 0) {
//     console.log(`${num} $$`);
//   } else {
//     console.log(num);
//   }
// });

// Soal C
// const input = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function isPrima(n) {
//   if (n < 2) return false;
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// input.question('Masukkan angka (1-10000): ', (nilaiString) => {
//   const nilaiInt = parseInt(nilaiString);

//   if (!isNaN(nilaiInt) && nilaiInt >= 1 && nilaiInt <= 10000) {
//     if (isPrima(nilaiInt)) {
//       console.log(`Angka ${nilaiInt} merupakan bilangan prima`);
//     } else {
//       console.log(`Angka ${nilaiInt} bukan merupakan bilangan prima`);
//     }
//   } else {
//     console.log('Input tidak valid! Masukkan angka antara 1 - 10000.');
//   }

//   input.close();
// });
