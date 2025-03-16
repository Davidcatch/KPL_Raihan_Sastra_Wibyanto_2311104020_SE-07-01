class DoorMachine {
  constructor() {
    this.state = 'Terkunci';
    console.log('Pintu terkunci');
  }

  unlock() {
    if (this.state === 'Terkunci') {
      this.state = 'Terbuka';
      console.log('Pintu tidak terkunci');
    } else {
      console.log('Pintu sudah terbuka');
    }
  }

  lock() {
    if (this.state === 'Terbuka') {
      this.state = 'Terkunci';
      console.log('Pintu terkunci');
    } else {
      console.log('Pintu sudah terkunci');
    }
  }
}

const door = new DoorMachine();

door.unlock();
door.lock();
door.lock();
