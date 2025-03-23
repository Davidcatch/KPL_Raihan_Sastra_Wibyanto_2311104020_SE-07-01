class HaloGeneric {
  SapaUser(user) {
    console.log(`Halo user ${user}`);
  }
}

class DataGeneric {
  constructor(data) {
    this.data = data;
  }

  PrintData() {
    console.log(`Data yang tersimpan adalah: ${this.data}`);
  }
}

let halo = new HaloGeneric();
halo.SapaUser('Raihan');

let nim = '2311104020';
let dataGeneric = new DataGeneric(nim);
dataGeneric.PrintData();
