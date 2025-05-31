# 📘 Modul 13 - Tugas Pendahuluan

### 2311104020<br> Raihan Sastra Wibyanto<br> SE-07-01

##  Source Code <img src="https://github.com/devicons/devicon/blob/master/icons/go/go-original-wordmark.svg" title="Golang" alt="Golang" width="40" height="40"/>
### File JS
customer.go
```go
package main

import "fmt"

type Customer struct {
	id string
}

func (c *Customer) update(itemName string) {
	fmt.Printf("Sending email to customer %s for item %s\n", c.id, itemName)
}

func (c *Customer) getID() string {
	return c.id
}

```
item.go
```go
package main

import "fmt"

type Item struct {
	observerList []Observer
	name         string
	inStock      bool
}

func newItem(name string) *Item {
	return &Item{
		name: name,
	}
}
func (i *Item) updateAvailability() {
	fmt.Printf("Item %s is now in stock\n", i.name)
	i.inStock = true
	i.notifyAll()
}
func (i *Item) register(o Observer) {
	i.observerList = append(i.observerList, o)
}

func (i *Item) deregister(o Observer) {
	i.observerList = removeFromslice(i.observerList, o)
}

func (i *Item) notifyAll() {
	for _, observer := range i.observerList {
		observer.update(i.name)
	}
}

func removeFromslice(observerList []Observer, observerToRemove Observer) []Observer {
	observerListLength := len(observerList)
	for i, observer := range observerList {
		if observerToRemove.getID() == observer.getID() {
			observerList[observerListLength-1], observerList[i] = observerList[i], observerList[observerListLength-1]
			return observerList[:observerListLength-1]
		}
	}
	return observerList
}

```
observer.go
```go
package main

type Observer interface {
	update(string)
	getID() string
}

```
subject.go
```go
package main

type Subject interface {
	register(observer Observer)
	deregister(observer Observer)
	notifyAll()
}

```
main.go
```go
package main

func main() {

	shirtItem := newItem("Nike Shirt")

	observerFirst := &Customer{id: "raihan@gmail.com"}
	observerSecond := &Customer{id: "Callista@gmail.com"}

	shirtItem.register(observerFirst)
	shirtItem.register(observerSecond)

	shirtItem.updateAvailability()
}

```

## Output
Hasil:<br>
Contoh Design Pattern "Observer"<br>
<img src="https://github.com/user-attachments/assets/d3638d9c-cdd3-417a-9b96-89aba7420618" width=300><br>

## Penjelasan
### MENJELASKAN SALAH SATU DESIGN PATTERN
A. Berikan salah satu contoh kondisi dimana design pattern “Observer” dapat digunakan
B. Berikan penjelasan singkat mengenai langkah-langkah dalam mengimplementasikan design pattern
“Observer”
C. Berikan kelebihan dan kekurangan dari design pattern “Observer”
Jawaban
A. Design pattern observer dapat digunakan seperti di toko handphone dan berlangganan koran 
atau majalah tentang munculnya produk baru yang belum diketahui oleh pelanggan.
B. Dalam mengimplementasikan design pattern observer hal yang harus diperhatikan yaitu:
   1. Pisahkan logika bisnis
      - Fungsionalitas inti = bertindak sebagain penerbit.
      - Kode lain yang tergantung = menjadi pelanggan.
   2. Antarmuka pelanggan
      - Harus memiliki minimal satu metode: update().
   3. Antarmuka penerbit
      - Harus punya metode attach(pelanggan) dan detach(pelanggan) untuk mengelola pelanggan.
   4. Manajemen langganan
      - Letakkan logika langganan di kelas abstrak penerbit atau gunakan komposisi bila penerbit
        sudah ada.
   5. Penerbit konkret
      - Saat terjadi perubahan/kejadian, panggil update() pada semua pelanggan.
   6. Pelanggan konkret
      - Implementasikan update(context) untuk menerima info.
      - Bisa juga menerima referensi penerbit sebagai parameter atau lewat konstruktor.
   7. Klien membuat dan mendaftarkan pelanggan ke penerbit yang sesuai.
C. Kelebihan  dari design pattern observer yaitu:
   1. Prinsip Terbuka / Tertutup.
   2. Dapat membuat hubungan antar objek pada waktu proses.
   Kekurangan dari design pattern observer yaitu:
   1. Pelanggan diberitahukan secara acak.
================================================================================================
<p>
👕 Observer Pattern dalam Go: Notifikasi Stok Barang Otomatis!
Proyek ini adalah simulasi penerapan Observer Design Pattern menggunakan bahasa Go. Diilustrasikan melalui interaksi antara Customer dan Item, program ini memungkinkan pelanggan untuk mendapatkan notifikasi otomatis ketika sebuah barang (seperti "Nike Shirt") kembali tersedia.
</p>
<p>
🔔 Bagaimana cara kerjanya?
</p>
<ul>
  <li>
    Customer bertindak sebagai Observer, yaitu pihak yang ingin diberi tahu.    
  </li>
  <li>
    Item bertindak sebagai Subject, yaitu objek yang dipantau.    
  </li>
  <li>
    Ketika Item berubah status menjadi in stock, semua Customer yang sudah mendaftar langsung mendapatkan notifikasi melalui update().    
  </li>
  <li>
    Sistem juga mendukung deregister, memungkinkan pelanggan berhenti berlangganan notifikasi.    
  </li>
</ul>
<p>
📦 Fitur utama:
</p>
<ul>
  <li>
    Daftar pelanggan disimpan dan dikelola secara dinamis.    
  </li>
  <li>
    Notifikasi langsung dikirim (melalui fmt.Printf) saat stok tersedia.    
  </li>
  <li>
    Arsitektur modular dengan interface Observer dan Subject, memudahkan pengembangan lebih lanjut.
  </li>
</ul>
<p>
✨ Cocok digunakan sebagai fondasi untuk membangun sistem real-time alert, seperti e-commerce, pengingat tiket konser, atau manajemen stok warehouse pintar.
</p>
<p>
  Sebelum menjalankan go run . atau menjalankan semua file install terlebih dahulu module go
</p>
