# 📘 Modul 13 - Jurnal

### 2311104020<br> Raihan Sastra Wibyanto<br> SE-07-01

##  Source Code <img src="https://github.com/devicons/devicon/blob/master/icons/go/go-original-wordmark.svg" title="Golang" alt="Golang" width="40" height="40"/>
### File JS
mahasiswa.go
```go
package main

import (
	"fmt"
	"sync"
)

type PusatDataSingleton struct {
	DataTersimpan []string
}

var _instance *PusatDataSingleton
var once sync.Once

// Konstruktor: hanya dipanggil sekali oleh sync.Once
func getDataSingleton() *PusatDataSingleton {
	once.Do(func() {
		_instance = &PusatDataSingleton{
			DataTersimpan: []string{},
		}
	})
	return _instance
}

// Method: Tambahkan data
func (p *PusatDataSingleton) AddSebuahData(input string) {
	p.DataTersimpan = append(p.DataTersimpan, input)
}

// Method: Hapus data berdasarkan index
func (p *PusatDataSingleton) HapusSebuahData(index int) {
	if index >= 0 && index < len(p.DataTersimpan) {
		p.DataTersimpan = append(p.DataTersimpan[:index], p.DataTersimpan[index+1:]...)
	}
}

// Method: Print semua data
func (p *PusatDataSingleton) PrintSemuaData() {
	for i, data := range p.DataTersimpan {
		fmt.Printf("%d: %s\n", i+1, data)
	}
}

// Method: Kembalikan semua data
func (p *PusatDataSingleton) GetSemuaData() []string {
	return p.DataTersimpan
}

func main() {
	// A & B
	data1 := getDataSingleton()
	data2 := getDataSingleton()

	// C - Tambahkan nama anggota dan asisten praktikum
	data1.AddSebuahData("Revan")
	data1.AddSebuahData("Fazza")
	data1.AddSebuahData("Fathur")
	data1.AddSebuahData("Ade")

	// D - Print semua data dari data2 (harus sama)
	fmt.Println("Data dari data2:")
	data2.PrintSemuaData()

	// E - Hapus asisten praktikum
	data2.HapusSebuahData(3)

	// F - Print dari data1, seharusnya index 3 sudah tidak ada
	fmt.Println("\nData dari data1 setelah penghapusan:")
	data1.PrintSemuaData()

	// G - Hitung jumlah elemen
	fmt.Printf("\nJumlah data di data1: %d\n", len(data1.GetSemuaData()))
	fmt.Printf("Jumlah data di data2: %d\n", len(data2.GetSemuaData()))
}
```

## Output
Hasil:<br>
Contoh PusatDataSingleton design pattern<br>
<img src="https://github.com/user-attachments/assets/a2493e6d-8261-4c51-8998-0159f859706e" width=300><br>

## Penjelasan
<p>
  🧠 Singleton Pattern dalam Go
File ini mendemonstrasikan implementasi design pattern Singleton dalam bahasa Go melalui struktur PusatDataSingleton. Dengan menggunakan sync.Once, program menjamin bahwa hanya satu instance dari PusatDataSingleton yang akan dibuat selama runtime—bahkan ketika dipanggil dari beberapa variabel seperti data1 dan data2.
</p>
<p>
Fitur-fitur yang tersedia meliputi:
</p>
<ul>
  <li>
    📝 Menambahkan data ke dalam list pusat.    
  </li>
  <li>
    ❌ Menghapus data berdasarkan indeks.    
  </li>
  <li>
    📋 Mencetak seluruh data tersimpan.    
  </li>
  <li>
    🔄 Mengakses data yang sama dari variabel berbeda karena sifat Singleton.
  </li>
</ul>
<p>
Contoh dalam main() menunjukkan bahwa manipulasi data dari data1 dan data2 akan selalu saling mencerminkan—menegaskan bahwa mereka adalah referensi ke instance yang sama. Cocok untuk studi kasus pengelolaan cache, konfigurasi global, atau pusat data bersama dalam aplikasi Go. 🔁💡
</p>
