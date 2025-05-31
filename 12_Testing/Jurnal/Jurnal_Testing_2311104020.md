# 📘 Modul 12 - Jurnal

### 2311104020<br> Raihan Sastra Wibyanto<br> SE-07-01

##  Source Code <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>
### File JS
pangkat.js
```js
function CariNilaiPangkat(a, b) {
  // Aturan Khusus
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10 || a > 100) return -2;

  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
    if (result > Number.MAX_SAFE_INTEGER) {
      return -3; // melebihi batas aman integer JS
    }
  }
  return result;
}

function handlePangkat() {
  const a = parseInt(document.getElementById("inputA").value);
  const b = parseInt(document.getElementById("inputB").value);
  const output = document.getElementById("output");

  if (isNaN(a) || isNaN(b)) {
    output.textContent = "Input tidak valid";
    return;
  }

  const hasil = CariNilaiPangkat(a, b);
  output.textContent = `Hasil: ${hasil}`;
}

```
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hitung Pangkat</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-6">
  <div class="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
    <h2 class="text-2xl font-bold text-center mb-4">Cari Nilai Pangkat</h2>

    <input id="inputA" type="number" placeholder="Masukkan nilai a" class="w-full mb-3 p-2 border rounded" />
    <input id="inputB" type="number" placeholder="Masukkan nilai b" class="w-full mb-3 p-2 border rounded" />

    <button onclick="handlePangkat()" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
      Hitung Pangkat
    </button>

    <div id="output" class="mt-4 font-semibold text-center"></div>
  </div>

  <script src="pangkat.js"></script>
</body>
</html>

```
test.js
```js
function assertEqual(actual, expected, name) {
  const div = document.getElementById("results");
  const result = document.createElement("div");
  result.textContent = actual === expected
    ? `✅ ${name}`
    : `❌ ${name} | Expected: ${expected}, Got: ${actual}`;
  result.style.color = actual === expected ? "green" : "red";
  div.appendChild(result);
}

// Branch coverage test
assertEqual(CariNilaiPangkat(2, 3), 8, "Pangkat normal");
assertEqual(CariNilaiPangkat(5, 0), 1, "Pangkat nol");
assertEqual(CariNilaiPangkat(2, -2), -1, "Pangkat negatif");
assertEqual(CariNilaiPangkat(5, 11), -2, "B lebih dari 10");
assertEqual(CariNilaiPangkat(101, 2), -2, "A lebih dari 100");
assertEqual(CariNilaiPangkat(9, 30), -3, "Melebihi batas integer aman");

```
test.html
```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Unit Test Pangkat</title>
</head>
<body>
  <h3>Hasil Unit Test:</h3>
  <div id="results" style="font-family: monospace;"></div>

  <script src="pangkat.js"></script>
  <script src="test.js"></script>
</body>
</html>

```

## Output
Hasil Demonstrasi WEB API:<br>
Contoh menghitung pangkat<br>
<img src="https://github.com/user-attachments/assets/8c2e19df-cac3-44b0-ab7b-60c52f7b293d" width=300><br>
Contoh menghitung pangkat tidak valid<br>
<img src="https://github.com/user-attachments/assets/a75adcbc-4e82-4cc1-be2b-e6d2ea1596ac" width=300><br>
Contoh unitTesting atau test<br>
<img src="https://github.com/user-attachments/assets/c4c4e886-4046-4878-8e2f-1acea8b26eb9" width=300><br>

## Penjelasan
⚡ pangkat.js adalah modul JavaScript sederhana yang menangani perhitungan nilai perpangkatan dengan tambahan aturan keamanan dan validasi. Fungsi utamanya, CariNilaiPangkat(a, b), menghitung nilai a pangkat b dengan beberapa batasan logis:
<ul>
  <li>
    Jika b = 0, hasilnya selalu 1 (sesuai aturan matematika).    
  </li>
  <li>
    Jika b < 0, hasilnya adalah -1 (menandakan input tak didukung).    
  </li>
  <li>
    Jika nilai b terlalu besar (>10) atau a melebihi 100, maka dikembalikan -2 (untuk mencegah kalkulasi besar).
  </li>
  <li>
    Jika hasilnya melebihi batas aman bilangan integer JavaScript, akan dikembalikan -3.
  </li>
</ul>
<p>
Fungsi handlePangkat() menghubungkan logika ini dengan antarmuka HTML: membaca input pengguna, memvalidasi, menghitung hasil, dan menampilkannya langsung di halaman. Cocok digunakan dalam aplikasi edukasi, simulasi matematika, atau latihan logika coding tingkat dasar. 💡🔢
</p>
<br>
<p>
  🧮 index.html adalah antarmuka pengguna dari aplikasi Hitung Pangkat, tempat pengguna dapat menghitung nilai perpangkatan dengan mudah. Dengan tampilan bersih dan modern berkat Tailwind CSS, pengguna hanya perlu mengisi dua input: nilai a dan nilai b (sebagai pangkat). Setelah menekan tombol “Hitung Pangkat”, hasil perhitungan akan langsung ditampilkan di bawahnya.
</p>
<p>
  File ini terhubung langsung ke pangkat.js, di mana seluruh logika validasi dan perhitungan dilakukan—termasuk penanganan khusus untuk pangkat nol, negatif, atau angka yang terlalu besar. Antarmuka ini ramah pengguna dan sangat cocok untuk pembelajaran interaktif matematika dasar atau eksperimen logika program. ⚙️📘
</p>
<br>
<p>
🧪 test.js adalah file pengujian unit khusus yang digunakan untuk menguji cakupan logika (branch coverage) dari fungsi CariNilaiPangkat dalam berbagai kondisi input. File ini menggunakan fungsi sederhana assertEqual(actual, expected, name) untuk membandingkan hasil aktual dengan nilai yang diharapkan, lalu menampilkan hasilnya langsung ke browser melalui elemen HTML.
</p>
<p>      
Pengujian mencakup berbagai skenario penting seperti:
</p>
<ul> 
  <li>
    🔁 Pangkat normal → 2^3 = 8    
  </li>
  <li>
    0️⃣ Pangkat nol → hasilnya harus 1    
  </li>
  <li>
    🚫 Pangkat negatif → dikembalikan -1
  </li>
  <li>
    📈 Pangkat terlalu besar (b > 10) → dikembalikan -2
  </li>
  <li>
    💥 Basis terlalu besar (a > 100) → dikembalikan -2    
  </li>
  <li>
    🧨 Hasil melebihi batas aman integer JavaScript → dikembalikan -3
  </li>
</ul>
<p>
Dengan pengujian ini, kamu bisa memastikan bahwa fungsi CariNilaiPangkat tahan terhadap berbagai jenis input—baik valid maupun ekstrem. Cocok untuk pengembangan yang mengutamakan kualitas kode dan reliabilitas logika. ✅🔎
</p>
