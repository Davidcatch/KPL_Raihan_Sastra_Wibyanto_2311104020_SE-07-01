/* 1. Menginput jumlah barang yang dibeli pelanggan.
   2. Menginput harga masing-masing barang.
   3. Menghitung total harga barang.
   4. Menentukan kategori diskon berdasarkan total harga:
      - Diskon Besar jika total harga lebih dari Rp100.000
      - Diskon Sedang jika total harga antara Rp50.000 - Rp100.000
      - Tidak Ada Diskon jika total harga kurang dari Rp50.000
    5. Menampilkan total harga, jumlah barang, dan kategori diskon kepada pelanggan.
    6. Menampilkan informasi tambahan untuk setiap barang yang dibeli. */

import process from 'process';
import readline from 'readline';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getDiskon(total) {
  if (total > 100000) {
    return 'Diskon Besar';
  } else if (total > 50000 && total < 100000) {
    return 'Diskon Sedang';
  } else {
    return 'Tidak Ada Diskon';
  }
}

input.question('Masukkan jumlah barang: ', (jml) => {
  input.question('Masukkan harga barang ke-1: ', (brg1) => {
    input.question('Masukkan harga barang ke-2: ', (brg2) => {
      input.question('Masukkan harga barang ke-3: ', (brg3) => {
        const totalHarga = parseInt(brg1) + parseInt(brg2) + parseInt(brg3);
        const diskon = getDiskon(totalHarga);
        console.log(`\nTotal harga: ${totalHarga}`);
        console.log(`Jumlah barang: ${jml}`);
        console.log(`Kategori diskon: ${diskon}`);
        console.log('Terima kasih sudah berbelanja');
        console.log('\nInformasi tambahan untuk barang ke-1');
        console.log('Informasi tambahan untuk barang ke-2');
        console.log('Informasi tambahan untuk barang ke-3');
        input.close();
      });
    });
  });
});
