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