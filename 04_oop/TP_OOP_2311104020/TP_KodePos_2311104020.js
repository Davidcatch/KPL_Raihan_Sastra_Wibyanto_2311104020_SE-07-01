class KodePos {
  constructor() {
    this.kodePosTable = {
      Batununggal: 40266,
      A_Kujangsari: 40287,
      Mengger: 40267,
      Wates: 40256,
      Cijaura: 40287,
      Jatisari: 40286,
      Margasari: 40286,
      Sekejati: 40286,
      Kebonwaru: 40272,
      Maleer: 40274,
      Samoja: 40273,
    };
  }

  getKodePos(kelurahan) {
    return this.kodePosTable[kelurahan] || 'Kode pos tidak ditemukan';
  }
}

const kodePosInstance = new KodePos();

console.log('Kode Pos Batununggal:', kodePosInstance.getKodePos('Batununggal'));
console.log('Kode Pos Maleer:', kodePosInstance.getKodePos('Maleer'));
console.log('Kode Pos Tidak Terdaftar:', kodePosInstance.getKodePos('TidakAda'));
