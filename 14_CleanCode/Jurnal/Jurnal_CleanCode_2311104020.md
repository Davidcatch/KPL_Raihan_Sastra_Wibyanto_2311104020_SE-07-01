# 📘 Modul 14 - Jurnal

### 2311104020<br> Raihan Sastra Wibyanto<br> SE-07-01

##  Source Code <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>
### File JS
Penjumlahan_SD_Refactor.js
```js
// Class untuk menampilkan sapaan kepada user
class HaloGeneric{
    /**
     * Menyapa user dengan nama yang diberikan.
     * @param {string} user - Nama user yang akan disapa
     */
    sapaUser(user){
        console.log(`Halo user ${user}`);
    }
}

// Class generic untuk menyimpan dan mencetak data
class DataGeneric{
    /**
     * Konstruktor untuk menyimpan data generic.
     * @param {*} data - Data yang akan disimpan   
     */
    constructor(data){
        this.data = data;
    }

    /** 
     * Mencetak data yang tersimpan.    
    */
   printData(){
    console.log(`Data yang tersimpan adalah: ${this.data}`);
   }
}

// Membuat instance HaloGeneric dan memanggil method sapaUser
const halo = new HaloGeneric();
halo.sapaUser('Raihan');

// Menyimpan NIM dalam instance DataGeneric dan mencetaknya
const nim = '2311104020';
const dataGeneric = new DataGeneric(nim);
dataGeneric.printData();
```

## Output
Hasil:<br>
Contoh Clean Code dengan Refactor kode sebelumnya pada modul 5<br>
<img src="https://github.com/user-attachments/assets/46dc6b6f-10d7-4bc1-8077-133bc48eaa24" width=300><br>

## Penjelasan
📦 Tentang Penjumlahan & SimpleDatabase
<P>
File JavaScript ini adalah contoh sederhana namun efektif dari penerapan pemrograman berorientasi objek (OOP) di dunia nyata. Terdapat dua kelas utama:
</P>

<ol>
  <li>
    Penjumlahan, yang fokus menghitung jumlah dari tiga angka besar (BigInt) secara efisien.    
  </li>
  <li>
    SimpleDataBase, yang menyimpan setiap data yang ditambahkan bersamaan dengan waktu penyimpanannya — cocok untuk pelacakan data berbasis waktu!
  </li>
</ol>

### Penggunaan Clean Code

<ol>
  <li>
    Class Terpisah Sesuai Tanggung Jawab
  </li>
  <ul>
    <li>
      Penjumlahan hanya mengurus logika penjumlahan, sedangkan SimpleDatabase fokus pada penyimpanan data. Ini mencerminkan prinsip Single Responsibility.
    </li>
  </ul>
  <li>
   Penamaan yang Deskriptif
  </li>
  <ul>
    <li>
      nama method seperti jumlahTigaAngka, addNewData, dan printAllData langsung menggambarkan fungsinya. Tidak perlu menebak!
    </li>
  </ul>
  <li>
    Penggunaan JSDoc
  </li>
  <ul>
    <li>
      Komentar dalam format JSDoc memberikan dokumentasi otomatis dan memudahkan pengembang lain memahami fungsi, parameter, dan tipe data yang digunakan.
    </li>
  </ul>
   <li>
    Konsistensi Penulisan
  </li>
  <ul>
    <li>
      Indentasi rapi, urutan kode logis, dan penempatan komentar membuat kode enak dibaca dan mudah dipelihara.
    </li>
  </ul>
  <li>
    Tipe Data Eksplisit
  </li>
  <ul>
    <li>
      Pemakaian BigInt menunjukkan perhatian terhadap batas ukuran angka, yang penting dalam perhitungan besar - contoh bagus dalam penulisan kode yang aman dan scalable.
    </li>
  </ul>
</ol>







