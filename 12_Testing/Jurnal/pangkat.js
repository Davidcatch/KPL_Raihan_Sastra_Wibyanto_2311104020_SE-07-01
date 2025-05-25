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
