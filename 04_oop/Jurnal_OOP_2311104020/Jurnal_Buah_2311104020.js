class Buah {
  constructor() {
    this.buahTable = {
      Apel: 'A00',
      Aprikot: 'B00',
      Alpukat: 'C00',
      Pisang: 'D00',
      Paprika: 'E00',
      Blackberry: 'F00',
      Ceri: 'H00',
      Kelapa: 'I00',
      Jagung: 'J00',
      Kurma: 'K00',
      Durian: 'L00',
      Anggur: 'M00',
      Melon: 'N00',
      Semangka: 'O00',
    };
  }

  getBuah(kode) {
    return this.buahTable[kode] || 'Kode buah tidak ditemukan';
  }
}

const buahInstance = new Buah();

console.log('Kode Buah Apel:', buahInstance.getBuah('Apel'));
console.log('Kode Buah Pisang:', buahInstance.getBuah('Pisang'));
console.log('Kode Buah Tidak Terdaftar:', buahInstance.getBuah('TidakAda'));
