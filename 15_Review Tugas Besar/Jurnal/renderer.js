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
