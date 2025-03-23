class Penjumlahan {
  JumlahTigaAngka(a, b, c) {
    return a + b + c;
  }
}

let angka1 = BigInt(23);
let angka2 = BigInt(11);
let angka3 = BigInt(10);

let penjumlahan = new Penjumlahan();
let hasil = penjumlahan.JumlahTigaAngka(angka1, angka2, angka3);

console.log('Hasil Penjumlahan Tiga Angka :', hasil.toString());
