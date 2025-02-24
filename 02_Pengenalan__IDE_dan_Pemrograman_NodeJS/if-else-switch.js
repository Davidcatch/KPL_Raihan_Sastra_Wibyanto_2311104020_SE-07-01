/* // if
const a = 10;
const b = 5;
const c = 2;

if (a > b) {
  console.log('a lebih besar dari b');
}

if (a % 2 === 0) {
  console.log('A habis dibagi 2');
} else if (b % 2 === 0) {
  console.log('B habis dibagi 2');
} else if (c % 2 === 0) {
  console.log('C habis dibagi 2');
} else {
  console.log('Semua value variable tidak habis dibagi 2');
} */

// switch
let pilihan = 2;

switch (pilihan) {
  case 1:
    console.log('nomor 1');
    break;
  case 2:
    console.log('nomor 2');
    break;
  case 3:
    console.log('nomor 3');
    break;
  default:
    console.log('tidak ada yang dipilih');
    break;
}
