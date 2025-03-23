class Penjumlahan {
  JumlahTigaAngka(a, b, c) {
    return a + b + c;
  }
}

class SimpleDataBase {
  constructor() {
    this.storedData = [];
    this.inputDates = [];
  }

  AddNewData(data) {
    this.storedData.push(data);
    this.inputDates.push(new Date());
  }

  PrintAllData() {
    this.storedData.forEach((data, index) => {
      console.log(`Data ke-${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index].toUTCString()}`);
    });
  }
}

let angka1 = BigInt(23);
let angka2 = BigInt(11);
let angka3 = BigInt(10);

let penjumlahan = new Penjumlahan();
let hasil = penjumlahan.JumlahTigaAngka(angka1, angka2, angka3);

console.log('Hasil Penjumlahan Tiga Angka :', hasil.toString());

let db = new SimpleDataBase();
db.AddNewData(angka1);
db.AddNewData(angka2);
db.AddNewData(angka3);
db.PrintAllData();
