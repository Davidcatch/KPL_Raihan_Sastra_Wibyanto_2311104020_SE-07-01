# 📘 Modul 5 - Jurnal

### 2311104020<br> Raihan Sastra Wibyanto<br> SE-07-01

##  Source Code <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>
Penjumlahan
```js
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
```
Penjumlahan_SimpleDatabase yang dimerge
```js
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
```
## Output

Hasil Output Penjumlahan:<br>

<img src="https://github.com/user-attachments/assets/70461b08-67bd-4496-8c94-aafbbdece894" width=450><br>

Hasil Output Penjumlahan dengan SimpleDatabase:<br>

<img src="https://github.com/user-attachments/assets/5892018b-3ac5-4287-abcd-08f58b3e097f" width=600>

## Penjelasan
### Penjumlahan
Pertama Buat Class Penjumlahan
```js
class Penjumlahan {
  JumlahTigaAngka(a, b, c) {
    return a + b + c;
  }
}
```
Di dalamnya terdapat method JumlahTigaAngka(a, b, c), yang menerima tiga parameter dan mengembalikan hasil penjumlahannya.

Kedua Menentukan Tipe Data sesuai dengan Akhiran NIM
```js
let angka1 = BigInt(23);
let angka2 = BigInt(11);
let angka3 = BigInt(10);
```
Karena NIM saya berakhiran 0, tipe data yang digunakan adalah long. Pada Javascript tidak memiliki tipe long, maka menggunakan BigInt,
BigInt() digunakan untuk memastikan angka dapat ditangani dalam bentuk bilangan besar pada Javascript.

Ketiga Membuat Objek dan Memanggil Method
```js
let penjumlahan = new Penjumlahan();
let hasil = penjumlahan.JumlahTigaAngka(angka1, angka2, angka3);
```
lalu buat objek dari class penjumlahan, dengan memanggil method JumlahTigaAngka() dengan tiga angka yang telah ditentukan.

Keempat Menampilkan Hasil
```js
console.log('Hasil Penjumlahan Tiga Angka :', hasil.toString());
```
Karena BigInt tidak bisa langsung dicetak sebagai string menggunakan console.log(), maka gunakan toString(), agar hasilnya tidak 44n.

### Penjumlahan dengan SimpleDatabase
Dengan penggabungan disatu file maka bisa menambahkan Class SimpleDatabase pada file Penjumlahan
```js
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
      console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index].toUTCString()}`);
    });
  }
}
```
Pada konstruktor storedData adalah array yang menyimpan data yang dimasukkan, inputDates adalah array yang menyimpan waktu kapan data dimasukkan.
Kemudian menambahkan method AddNewData dengan parameter data, lalu tambahkan data baru ke storedData dan mencatat waktu penyimpanannya ke inputDates.
PrintAllData() mencetak semua data yang telah disimpan beserta waktu penyimpanannya.

Selanjutnya Menyimpan Data ke SimpleDatabase
```js
let db = new SimpleDataBase();
db.AddNewData(angka1);
db.AddNewData(angka2);
db.AddNewData(angka3);
db.PrintAllData();
```
Membuat objek SimpleDatabase. Tambahkan tiga angka yang digunakan dalam perhitungan ke database. Tampilkan semua data yang telah disimpan beserta timestamp nya.

Karena File kedua digabung dan dimerge, sesuai perintah pada soal
1. Buat dua branch (implementasi-generic-method & implementasi-generic-class) dari main.
2. Tambahkan perubahan dan commit di masing-masing branch.
3. Push ke GitHub masing-masing branch.
4. Merge kedua branch ke main satu per satu.
5. Push hasil merge ke GitHub.

contoh konflik setelah di merge:<br>

<img src="https://github.com/user-attachments/assets/dd3c58ca-81c1-44ee-8b54-fa38972052bb" width=600>
