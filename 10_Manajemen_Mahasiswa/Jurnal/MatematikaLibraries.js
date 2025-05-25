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
      
      if (pangkat > 1) return `${koefBaru}x^${pangkat - 1}`;
      if (pangkat === 1) return `${koefBaru}x`;
      return `${koefBaru}`;
    })
    .join(" + ")
    .replace(/\+ -/g, "- "); // Perbaiki format negatif
}

export function Integral(koefisien) {
  const hasil = koefisien.map((koef, index) => {
    const pangkat = koefisien.length - index;
    const koefBaru = koef / pangkat;
    
    if (pangkat > 1) return `${koefBaru}x^${pangkat}`;
    return `${koefBaru}x`;
  });
  
  return `${hasil.join(" + ")} + C`.replace(/\+ -/g, "- ");
}