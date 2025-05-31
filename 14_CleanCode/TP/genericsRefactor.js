// Class untuk menampilkan sapaan kepada user
class HaloGeneric{
    /**
     * Menyapa user dengan nama yang diberikan.
     * @param {string} user - Nama user yang akan disapa
     */
    sapaUser(user){
        console.log(`Halo user ${user}`);
    }
}

// Class generic untuk menyimpan dan mencetak data
class DataGeneric{
    /**
     * Konstruktor untuk menyimpan data generic.
     * @param {*} data - Data yang akan disimpan   
     */
    constructor(data){
        this.data = data;
    }

    /** 
     * Mencetak data yang tersimpan.    
    */
   printData(){
    console.log(`Data yang tersimpan adalah: ${this.data}`);
   }
}

// Membuat instance HaloGeneric dan memanggil method sapaUser
const halo = new HaloGeneric();
halo.sapaUser('Raihan');

// Menyimpan NIM dalam instance DataGeneric dan mencetaknya
const nim = '2311104020';
const dataGeneric = new DataGeneric(nim);
dataGeneric.printData();