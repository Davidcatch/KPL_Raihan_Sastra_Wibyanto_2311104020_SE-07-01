# 📘 Modul 15 - Tugas Jurnal

### 2311104020<br> Raihan Sastra Wibyanto<br> SE-07-01

##  Source Code <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/> <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML5" width="40" height="40"/> <img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-original.svg" title="TailwindCSS" alt="TailwindCSS" width="40" height="40"/> 
### File JS
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Login App</title>
  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen font-sans">

  <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6">
    <h1 class="text-2xl font-bold text-center text-blue-600">🔐 Secure Login</h1>

    <div>
      <h2 class="text-xl font-semibold mb-2">Register</h2>
      <input id="reg-username" type="text" placeholder="Username"
        class="w-full px-4 py-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input id="reg-password" type="password" placeholder="Password"
        class="w-full px-4 py-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button onclick="register()"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Register</button>
    </div>

    <div>
      <h2 class="text-xl font-semibold mb-2">Login</h2>
      <input id="login-username" type="text" placeholder="Username"
        class="w-full px-4 py-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
      <input id="login-password" type="password" placeholder="Password"
        class="w-full px-4 py-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
      <button onclick="login()"
        class="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">Login</button>
    </div>

    <div id="message" class="text-sm text-center text-red-500 mt-2"></div>
  </div>

  <script src="renderer.js"></script>
</body>
</html>

```
main.js
```js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
});

```
renderer.js
```js
const fs = require('fs');
const crypto = require('crypto');
const dbPath = './userDB.json';

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function validateInput(username, password) {
  const asciiRegex = /^[a-zA-Z0-9]*$/;
  const specialCharRegex = /[!@#$%^&*]/;

  if (!username || !password) return "Semua field harus diisi";
  if (username.length < 5 || username.length > 20) return "Username harus 5-20 karakter";
  if (!asciiRegex.test(username)) return "Username hanya boleh huruf/angka ASCII";

  if (password.length < 8 || password.length > 20) return "Password harus 8-20 karakter";
  if (!specialCharRegex.test(password)) return "Password harus mengandung karakter unik (!@#$%^&*)";
  if (password.toLowerCase().includes(username.toLowerCase())) return "Password tidak boleh mengandung username";

  return null;
}

function loadUsers() {
  if (!fs.existsSync(dbPath)) return [];
  return JSON.parse(fs.readFileSync(dbPath));
}

function saveUsers(users) {
  fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
}

function register() {
  const username = document.getElementById('reg-username').value.trim();
  const password = document.getElementById('reg-password').value.trim();

  const error = validateInput(username, password);
  if (error) return showMsg(error);

  let users = loadUsers();
  if (users.find(u => u.username === username)) return showMsg("Username sudah terdaftar");

  users.push({ username, password: hashPassword(password) });
  saveUsers(users);
  showMsg("Registrasi berhasil!", true);
}

function login() {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  const users = loadUsers();
  const user = users.find(u => u.username === username && u.password === hashPassword(password));

  if (user) {
    showMsg("Login berhasil!", true);
  } else {
    showMsg("Username/password salah");
  }
}

function showMsg(msg, success = false) {
  const msgDiv = document.getElementById('message');
  msgDiv.innerText = msg;
  msgDiv.style.color = success ? 'green' : 'red';
}
```
userDB.json
```json
[
{
    "username": "Admin",
    "password": "c4533d2efa21d128352dfe269ee58a59b9ff8d281fa57fc2329c346154fc8ff3"
}
]
```

## Output
Hasil:<br>
Contoh Registrasi berhasil<br>
<img src="https://github.com/user-attachments/assets/8f4ba2d2-dd2d-49e1-951c-e51aa6178977" width=300><br>
Contoh Login berhasil<br>
<img src="https://github.com/user-attachments/assets/ce6dbcf9-7a7b-4684-8512-b643f5b30723" width=300><br>

## Penjelasan

🔐 Aplikasi Login & Register Sederhana dengan Electron
<p>
Proyek ini adalah contoh aplikasi desktop berbasis Electron JS yang menyediakan fitur registrasi dan login lokal, lengkap dengan validasi input dan penyimpanan data pengguna dalam file JSON. Dengan memanfaatkan modul crypto untuk hashing password (SHA-256), serta fs untuk manajemen file, aplikasi ini menunjukkan bagaimana kita bisa membangun sistem autentikasi sederhana tanpa memerlukan database eksternal.
</p>
<p>
Desain minimalis, ukuran window hanya 400x600, cocok untuk prototipe ringan, demo tugas akhir, atau sekadar eksplorasi kemampuan Electron. Validasi input pun dibuat ketat demi keamanan, seperti memastikan username hanya berisi karakter ASCII dan password memiliki karakter unik serta tidak mengandung username.
</p>
<p>
  Dengan file index.html sebagai ui untuk tampilan yang interaktif dimana menggunakan styling Tailwind untuk memperbagus tampilan 
</p>
<p>
Sedangkan userDB.json digunakan untuk menyimpan data username dan password yang telah di hash.
</p>
