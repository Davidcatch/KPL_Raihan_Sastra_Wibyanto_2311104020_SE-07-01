class PosisiKarakterGame {
  constructor(nim) {
    this.state = 'Berdiri';
    this.nimMod = nim % 3;
  }

  transisi(tombol) {
    let prevState = this.state;
    switch (this.state) {
      case 'Berdiri':
        if (tombol === 'TombolS') this.state = 'Jongkok';
        else if (tombol === 'TombolW') this.state = 'Terbang';
        break;
      case 'Jongkok':
        if (tombol === 'TombolS') this.state = 'Tengkurap';
        else if (tombol === 'TombolW') this.state = 'Berdiri';
        else if (tombol === 'TombolX') this.state = 'Terbang';
        break;
      case 'Tengkurap':
        if (tombol === 'TombolW') this.state = 'Jongkok';
        break;
      case 'Terbang':
        if (tombol === 'TombolS') this.state = 'Berdiri';
        break;
    }
    this.cetakOutput(prevState, tombol);
  }

  cetakOutput(prevState, tombol) {
    if (this.nimMod === 0) {
      if (tombol === 'TombolS') console.log('tombol arah bawah ditekan');
      if (tombol === 'TombolW') console.log('tombola rah atas ditekan');
    } else if (this.nimMod === 1) {
      if (this.state === 'Berdiri') console.log('posisi standby');
      if (this.state === 'Tengkurap') console.log('posisi istirahat');
    } else if (this.nimMod === 2) {
      if (prevState === 'Terbang' && this.state === 'Jongkok') console.log('posisi landing');
      if (prevState === 'Berdiri' && this.state === 'Terbang') console.log('posisi take off');
    }
    console.log(`State sekarang: ${this.state}`);
  }
}

const nim = 2311104020;
const game = new PosisiKarakterGame(nim);

game.transisi('TombolS');
game.transisi('TombolS');
game.transisi('TombolW');
game.transisi('TombolX');
game.transisi('TombolS');
game.transisi('TombolW');
