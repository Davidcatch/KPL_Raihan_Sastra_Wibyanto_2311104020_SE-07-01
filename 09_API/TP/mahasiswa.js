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
 *     summary: Mendapatkan data mahasiswa berdasarkan id
 *     tags: [Mahasiswa]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Id mahasiswa (dimulai dari 0)
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
  const id = parseInt(req.params.id); // Perhatikan: menggunakan 'id' bukan 'index'

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID harus berupa angka' });
  }

  if (id >= 0 && id < mahasiswaList.length) {
    res.json(mahasiswaList[id]);
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
 *     summary: Menghapus data mahasiswa berdasarkan id
 *     tags: [Mahasiswa]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Id mahasiswa (dimulai dari 0)
 *     responses:
 *       200:
 *         description: Mahasiswa berhasil dihapus
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mahasiswa'
 *       400:
 *         description: ID harus berupa angka
 *       404:
 *         description: Mahasiswa tidak ditemukan
 */
app.delete('/api/mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID harus berupa angka' });
  }

  if (id >= 0 && id < mahasiswaList.length) {
    const deletedMahasiswa = mahasiswaList.splice(id, 1)[0];
    res.json({
      message: 'Mahasiswa berhasil dihapus',
      data: deletedMahasiswa,
    });
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
