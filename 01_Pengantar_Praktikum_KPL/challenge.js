import process from 'process';
import readline from 'readline';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question('Siapa nama kamu?: ', (nama) => {
  input.question('Jurusan kamu?: ', (jurusan) => {
    input.question('Universitas kamu?: ', (univ) => {
      input.question('Umur kamu?: ', (umur) => {
        console.log('====================================');
        console.log(`Halo, ${nama}!`);
        console.log(`kamu berada di jurusan ${jurusan}`);
        console.log(`kamu berada di universitas ${univ}`);
        console.log(`umur kamu adalah ${umur}`);
        input.close();
      });
    });
  });
});
