# 📘 Modul 7 - Jurnal

### 2311104020<br> Raihan Sastra Wibyanto<br> SE-07-01

##  Source Code <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>
### File JS
DataMahasiswa_2311104020
```js
import { readFile } from 'fs/promises';

class DataMahasiswa_2311104020 {
  static async ReadJSON() {
    const rawData = await readFile('./jurnal7_1_2311104020.json', 'utf-8');
    const data = JSON.parse(rawData);

    console.log('=== Data Mahasiswa ===');
    console.log(`Nama     : ${data.nama}`);
    console.log(`NIM      : ${data.nim}`);
    console.log(`Kelas    : ${data.kelas}`);
    console.log(`Prodi    : ${data.prodi}`);
    console.log(`Fakultas : ${data.fakultas}`);
  }
}

DataMahasiswa_2311104020.ReadJSON();
```
TeamMembers_2311104020
```js
import { readFile } from 'fs/promises';

class TeamMembers_2311104020 {
  static async ReadJSON() {
    const rawData = await readFile('./jurnal7_2_2311104020.json', 'utf-8');
    const data = JSON.parse(rawData);

    console.log('Team member list:');
    data.team_members.forEach((member) => {
      console.log(`${member.nim} ${member.first_name} ${member.last_name} (${member.age} ${member.gender})`);
    });
  }
}

TeamMembers_2311104020.ReadJSON();

```
### File JSON
jurnal7_1_2311104020
```json
{
  "nama": "Raihan Sastra Wibyanto",
  "nim": "2311104020",
  "kelas": "SE-07-01",
  "prodi": "Rekayasa Perangkat Lunak",
  "fakultas": "Teknik Informatika"
}

```
jurnal7_2_2311104020
```json
{
  "team_members": [
    {
      "nim": "2311104020",
      "first_name": "Raihan",
      "last_name": "Sastra Wibyanto",
      "age": 20,
      "gender": "Laki-laki"
    },
    {
      "nim": "2311104028",
      "first_name": "Aulia Ahmad ",
      "last_name": "Ghaus Adzam",
      "age": 20,
      "gender": "Laki-laki"
    },
    {
      "nim": "2311104038",
      "first_name": "Ghaza Zidane",
      "last_name": "Nurraihan",
      "age": 20,
      "gender": "Pria"
    }
  ]
}

```
## Output
Hasil parsing DataMahasiswa:<br>

<img src="https://github.com/user-attachments/assets/20425e3c-4807-43c1-ab21-8749533480fa" width=300><br>

Hasil parsing TeamMembers:<br>

<img src="https://github.com/user-attachments/assets/70e68294-22ed-4879-80b2-9040b022d010" width=300>


## Penjelasan
### Parsing DataMahasiswa
<p>
Program di atas merupakan contoh implementasi parsing data JSON untuk menampilkan informasi mahasiswa menggunakan Node.js. Parsing JSON adalah proses konversi data dari format teks JSON (JavaScript Object Notation) menjadi objek JavaScript yang dapat dimanipulasi secara programatik. Dalam kasus ini, data mahasiswa disimpan dalam file jurnal7_1_2311104020.json yang berisi informasi seperti nama, NIM, kelas, program studi, dan fakultas.
Proses diawali dengan mengimpor modul fs/promises untuk membaca file secara asinkron menggunakan fungsi readFile. Kelas DataMahasiswa_2311104020 kemudian dibuat dengan metode statis ReadJSON() yang bertugas membaca dan memproses data. Setelah file dibaca, data mentah dalam bentuk string (rawData) diubah menjadi objek JavaScript menggunakan JSON.parse().
Hasil parsing tersebut kemudian ditampilkan dalam format yang terstruktur dengan console.log, mencakup seluruh informasi mahasiswa. Dengan demikian, parsing JSON memungkinkan program untuk mengakses dan menampilkan data dari file eksternal secara efisien dan terorganisir, memisahkan antara penyimpanan data (file JSON) dan logika pemrosesan (kode JavaScript).
</p>

### Parsing TeamMembers
<p>
Program di atas merupakan contoh implementasi parsing data JSON untuk menampilkan daftar anggota tim menggunakan Node.js. Parsing JSON adalah proses mengubah data dari format teks JSON menjadi objek JavaScript yang dapat diolah oleh program. Pada contoh ini, data disimpan dalam file jurnal7_2_2311104020.json yang berisi array dari beberapa anggota tim beserta informasi detail seperti NIM, nama depan, nama belakang, usia, dan gender.
Proses diawali dengan mengimpor fungsi readFile dari modul fs/promises untuk membaca file secara asynchronous. Kelas TeamMembers_2311104020 kemudian dibuat dengan metode statis ReadJSON() yang bertanggung jawab untuk membaca dan memproses data. Setelah file berhasil dibaca, data mentah dalam bentuk string (rawData) diubah menjadi objek JavaScript menggunakan fungsi JSON.parse().
Hasil parsing tersebut kemudian ditampilkan dalam format yang terstruktur dengan melakukan iterasi pada array team_members menggunakan metode forEach. Setiap anggota tim ditampilkan dengan format yang mencakup NIM, nama lengkap, usia, dan gender. Dengan menggunakan teknik parsing JSON ini, program mampu membaca dan menampilkan data dari file eksternal secara efisien, sekaligus memisahkan antara penyimpanan data (file JSON) dan logika presentasi (kode JavaScript). Pendekatan ini sangat berguna dalam pengembangan aplikasi yang membutuhkan pemisahan antara data dan tampilan.
</p>
