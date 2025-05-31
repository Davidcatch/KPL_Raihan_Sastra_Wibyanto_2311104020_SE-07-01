# 📘 Modul 10 - Jurnal

### 2311104020<br> Raihan Sastra Wibyanto<br> SE-07-01

##  Source Code <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>
### File JS
MatematikaLibraries.js
```js
export function FPB(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

export function KPK(a, b) {
  return (a * b) / FPB(a, b);
}

export function Turunan(koefisien) {
  return koefisien
    .slice(0, -1) // Abaikan konstanta terakhir
    .map((koef, index) => {
      const pangkat = koefisien.length - 1 - index;
      const koefBaru = koef * pangkat;
      
      if (pangkat > 1) return ${koefBaru}x^${pangkat - 1};
      if (pangkat === 1) return ${koefBaru}x;
      return ${koefBaru};
    })
    .join(" + ")
    .replace(/\+ -/g, "- "); // Perbaiki format negatif
}

export function Integral(koefisien) {
  const hasil = koefisien.map((koef, index) => {
    const pangkat = koefisien.length - index;
    const koefBaru = koef / pangkat;
    
    if (pangkat > 1) return ${koefBaru}x^${pangkat};
    return ${koefBaru}x;
  });
  
  return ${hasil.join(" + ")} + C.replace(/\+ -/g, "- ");
}
```
index.js
```js
import { FPB, KPK, Turunan, Integral } from './MatematikaLibraries.js';

// Contoh penggunaan FPB
console.log("FPB(60, 45) =", FPB(60, 45));

// Contoh penggunaan KPK
console.log("KPK(12, 8) =", KPK(12, 8)); 

// Contoh penggunaan Turunan
console.log(
  "Turunan([1, 4, -12, 9]) =", 
  Turunan([1, 4, -12, 9])
); // Output: "3x^2 + 8x - 12"

// Contoh penggunaan Integral
console.log(
  "Integral([4, 6, -12, 9]) =", 
  Integral([4, 6, -12, 9])
); 
```

## Output
Hasil:<br>
Contoh Library Matematikan yang dijalankan di index.js<br>
<img src="https://github.com/user-attachments/assets/31c5f586-f023-4d06-8f00-f774410fa5d9" width=300><br>

## Penjelasan
<p>
🧠 MatematikaLibraries.js adalah toolkit mini namun cerdas yang dirancang untuk menyelesaikan perhitungan matematika klasik dengan sentuhan modern JavaScript. Pustaka ini menyediakan fungsi FPB dan KPK untuk mencari Faktor Persekutuan Terbesar dan Kelipatan Persekutuan Terkecil, sangat berguna untuk operasi bilangan bulat. Selain itu, tersedia juga fungsi Turunan dan Integral untuk menganalisis fungsi polinomial—cukup masukkan array koefisien, dan biarkan pustaka ini mengubahnya menjadi bentuk turunan atau integral yang sudah diformat rapi.
</p>
<p>
  Semua fungsi ini bisa langsung dicoba melalui index.js untuk eksplorasi interaktif. Cocok untuk pelajar, pengajar, atau pengembang yang ingin menyisipkan logika matematika ke dalam aplikasi. ⚙️📊
</p>
