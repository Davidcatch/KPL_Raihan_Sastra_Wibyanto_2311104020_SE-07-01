# 📘 Modul 14 - Tugas Pendahuluan

### 2311104020<br> Raihan Sastra Wibyanto<br> SE-07-01

##  Source Code <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>
### File JS
genericsRefactor.js
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
Hasil Demonstrasi WEB API:<br>
Contoh API Mahasiswa<br>
<img src="https://github.com/user-attachments/assets/879cd27e-3241-41a8-9732-df33223e7a07" width=300><br>

## Penjelasan
1. Penamaan Class dan Method yang Jelas
  <ul>
    <li>
      HaloGeneric dan DataGeneric adalah nama class yang deskriptif dan mudah dipahami.      
    </li>
    <li>
      Method seperti sapaUser() dan printData() langsung menjelaskan apa fungsinya hanya dari namanya saja — sesuai prinsip self-explanatory.
    </li>
  </ul>
2. Penggunaan JSDoc untuk Dokumentasi
  <ul>
    <li>
      Setiap method dan constructor diberi komentar JSDoc yang menjelaskan parameter dan fungsi. Ini membantu developer lain (atau diri sendiri di masa depan) memahami fungsi kode tanpa perlu membaca seluruh implementasinya.      
    </li>
  </ul>
3. Pemakaian Parameter Bertipe Umum (Generic)
  <ul>
    <li>
      Class DataGeneric dirancang agar fleksibel menyimpan tipe data apa pun. Ini menunjukkan reuseability dan mencegah duplikasi kode untuk setiap jenis data.
    </li>
  </ul>
4. Struktur dan Format yang Rapi
  <ul>
    <li>
      Indentasi konsisten.      
    </li>
    <li>
      Baris kode tidak terlalu panjang.
    </li>
    <li>
      Pemisahan logika dengan komentar yang relevan membuat kode mudah dipindai.
    </li>
  </ul>
5. Single Responsibility Principle
  <ul>
    <li>
      Masing-masing class dan method hanya mengerjakan satu tugas spesifik. Ini membuat kode mudah diuji dan dimodifikasi secara terpisah tanpa merusak bagian lain.
    </li>
  </ul>
