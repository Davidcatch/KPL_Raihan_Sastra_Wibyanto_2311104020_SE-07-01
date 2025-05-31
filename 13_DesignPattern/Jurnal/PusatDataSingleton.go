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
