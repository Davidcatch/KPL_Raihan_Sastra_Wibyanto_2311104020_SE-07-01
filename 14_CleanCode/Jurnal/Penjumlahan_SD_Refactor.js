// Kelas Penjumlahan berfungsi untuk menghitung jumlah tiga angka
class Penjumlahan{
    /** 
     * Menjumlahkan tiga angka.
     * @param {BigInt} a - Angka Pertama
     * @param {BigInt} b - Angka Kedua
     * @param {BigInt} c - Angka Ketiga
     * @returns {BigInt} - Hasil penjumlahan ketiga angka
     */  
    jumlahTigaAngka(a, b, c){
        return a + b + c;
    }
}

// Kelas SimpleDatabase untuk menyimpan data dan waktu input
class SimpleDataBase{
    constructor(){
        this.storedData = [];
        this.inputDates = [];
    }

    /**
     * Menambahkan data baru ke database.
     * @param {*} data - Data yang akan disimpan 
     */  
    addNewData(data){
        this.storedData.push(data);
        this.inputDates.push(new Date());
    }

    /**
     * Mencetak semua data beserta waktu penyimpanannya. 
     */ 
    printAllData(){
        this.storedData.forEach((data, index) => {
            console.log(
                `Data ke-${index + 1} berisi: ${data}, disimpan pada UTC: ${this.inputDates[index].toUTCString()}`
            );
        });
    }
}

// Deklarasi tiga angka bertipe BigInt
const angka1 = BigInt(23);
const angka2 = BigInt(11);
const angka3 = BigInt(10);

// Membuat instance dari kelas Penjumlahan dan menghitung hasil
const penjumlahan = new Penjumlahan();
const hasil = penjumlahan.jumlahTigaAngka(angka1, angka2, angka3);

console.log('Hasil Penjumlahan Tiga Angka:', hasil.toString());

// Membuat instance dari SimpleDatabase dan menyimpan data
const db = new SimpleDataBase();
db.addNewData(angka1);
db.addNewData(angka2);
db.addNewData(angka3);

// Mencetak seluruh data
db.printAllData();