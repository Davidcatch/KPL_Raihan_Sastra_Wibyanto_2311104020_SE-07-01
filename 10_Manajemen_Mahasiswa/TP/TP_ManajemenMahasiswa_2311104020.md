# 📘 Modul 10 - Tugas Pendahuluan

### 2311104020<br> Raihan Sastra Wibyanto<br> SE-07-01

##  Source Code <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>
### File JS
AljabarLibraries.js
```js
export function AkarPersamaanKuadrat(persamaan) {
  const [a, b, c] = persamaan;
  const discriminant = b * b - 4 * a * c;
  
  if (discriminant < 0) return [];
  if (discriminant === 0) return [-b / (2 * a)];
  
  const sqrtDiscriminant = Math.sqrt(discriminant);
  return [
    (-b + sqrtDiscriminant) / (2 * a),
    (-b - sqrtDiscriminant) / (2 * a)
  ];
}

export function HasilKuadrat(persamaan) {
  const [a, b] = persamaan;
  return [a * a, 2 * a * b, b * b];
}
```
App.js
```js
import { AkarPersamaanKuadrat, HasilKuadrat } from './AljabarLibraries.js';

// Contoh penggunaan AkarPersamaanKuadrat
console.log(
  "AkarPersamaanKuadrat([1, -3, -10]) =", 
  AkarPersamaanKuadrat([1, -3, -10])
);

// Contoh penggunaan HasilKuadrat
console.log(
  "HasilKuadrat([2, -3]) =", 
  HasilKuadrat([2, -3])
); 
```

## Output
Hasil:<br>
Contoh Library Aljabar yang dijalankan di App.js<br>
<img src="https://github.com/user-attachments/assets/9d59c09d-242a-4abf-9b94-56e3d7f35505" width=300><br>



## Penjelasan
<p>
📐 AljabarLibraries.js adalah pustaka JavaScript sederhana namun powerful yang dirancang untuk membantu perhitungan dasar aljabar. Modul ini menyediakan dua fungsi utama: AkarPersamaanKuadrat untuk menghitung akar-akar dari persamaan kuadrat (baik real maupun tunggal), serta HasilKuadrat untuk menghasilkan bentuk kuadrat sempurna dari dua variabel. Cukup beri input berupa array koefisien, dan biarkan fungsi ini melakukan hitungan matematisnya.
</p>
<p>
Contoh implementasi langsung dapat dilihat pada file App.js, yang memperlihatkan hasil nyata dari perhitungan aljabar secara instan di console. Cocok untuk pembelajaran, eksperimen matematika, atau proyek-proyek sains data kecil. 🎓✨
</p>
