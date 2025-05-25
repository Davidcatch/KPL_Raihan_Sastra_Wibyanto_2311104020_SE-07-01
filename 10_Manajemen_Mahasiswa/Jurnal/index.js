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