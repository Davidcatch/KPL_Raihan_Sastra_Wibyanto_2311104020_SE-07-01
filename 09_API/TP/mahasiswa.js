const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 8000;

// Middleware untuk parsing JSON
app.use(express.json());

// Data Mahasiswa default
let mahasiswaList = [
  { nama: 'Raihan Sastra Wibyanto', nim: '2311104020' },
  { nama: 'Yoga Eka Pratama', nim: '2311104023' },
  { nama: 'M.Faris', nim: '2311104017' },
  { nama: 'Nizar Daffa Maulana', nim: '2311104019' },
  { nama: 'Tegar Kang Ageng Gilang', nim: '2311104018' },
];

// Swagger configuration
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Data Mahasiswa',
      version: '1.0.0',
      description: 'API untuk manajemen data mahasiswa',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'server',
      },
    ],
  },
  apis: ['./mahasiswa.js'],
};

const specs = swaggerJsdoc(options);

/**
 * @swagger
 * tags:
 *   name: Mahasiswa
 *   description: Manajemen data mahasiswa
 */

/**
 * @swagger
 * /api/mahasiswa:
 *   get:
 *     summary: Mendapatkan daftar semua mahasiswa
 *     tags: [Mahasiswa]
 *     responses:
 *       200:
 *         description: Sukses mendapatkan data mahasiswa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mahasiswa'
 */
app.get('/api/mahasiswa', (req, res) => {
  res.json(mahasiswaList);
});

/**
 * @swagger
 * /api/mahasiswa/{id}:
 *   get:
 *     summary: Mendapatkan data mahasiswa berdasarkan index
 *     tags: [Mahasiswa]
 *     parameters:
 *       - in: path
 *         name: index
 *         required: true
 *         schema:
 *           type: integer
 *         description: Index mahasiswa
 *     responses:
 *       200:
 *         description: Sukses mendapatkan data mahasiswa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mahasiswa'
 *       404:
 *         description: Mahasiswa tidak ditemukan
 */
app.get('/api/mahasiswa/:id', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswaList.length) {
    res.json(mahasiswaList[index]);
  } else {
    res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
  }
});

/**
 * @swagger
 * /api/mahasiswa:
 *   post:
 *     summary: Menambahkan data mahasiswa baru
 *     tags: [Mahasiswa]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MahasiswaInput'
 *     responses:
 *       201:
 *         description: Mahasiswa berhasil ditambahkan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mahasiswa'
 */
app.post('/api/mahasiswa', (req, res) => {
  const { nama, nim } = req.body;
  if (!nama || !nim) {
    return res.status(400).json({ message: 'Nama dan NIM harus diisi' });
  }
  const newMahasiswa = { nama, nim };
  mahasiswaList.push(newMahasiswa);
  res.status(201).json(newMahasiswa);
});

/**
 * @swagger
 * /api/mahasiswa/{id}:
 *   delete:
 *     summary: Menghapus data mahasiswa berdasarkan index
 *     tags: [Mahasiswa]
 *     parameters:
 *       - in: path
 *         name: index
 *         required: true
 *         schema:
 *           type: integer
 *         description: Index mahasiswa yang akan dihapus
 *     responses:
 *       200:
 *         description: Mahasiswa berhasil dihapus
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mahasiswa'
 *       404:
 *         description: Mahasiswa tidak ditemukan
 */
app.delete('/api/mahasiswa/:id', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswaList.length) {
    const deletedMahasiswa = mahasiswaList.splice(index, 1);
    res.json(deletedMahasiswa[0]);
  } else {
    res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
  }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Mahasiswa:
 *       type: object
 *       properties:
 *         nama:
 *           type: string
 *         nim:
 *           type: string
 *       example:
 *         nama: Raihan Sastra Wibyanto
 *         nim: 2311104020
 *     MahasiswaInput:
 *       type: object
 *       required:
 *         - nama
 *         - nim
 *       properties:
 *         nama:
 *           type: string
 *         nim:
 *           type: string
 *       example:
 *         nama: Mahasiswa Baru
 *         nim: Nim Baru
 */

// Setup Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
  console.log(`Swagger UI tersedia di http://localhost:${port}/api-docs`);
});
