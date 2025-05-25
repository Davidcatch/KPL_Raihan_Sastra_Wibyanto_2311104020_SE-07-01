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
