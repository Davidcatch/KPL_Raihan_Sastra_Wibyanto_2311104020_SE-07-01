const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Mahasiswa class
class Mahasiswa {
  constructor(name, nim, courses, year) {
    this.Name = name;
    this.Nim = nim;
    this.Course = courses;
    this.Year = year;
  }
}

// Static list of Mahasiswa objects (initial data)
let mahasiswaList = [
  new Mahasiswa('Raihan Sastra Wibyanto', '2311104020', ['SE', 'KPL'], 2023),
  new Mahasiswa('Yoga Eka Pratama', '2311104023', ['SE', 'KPL'], 2023),
  new Mahasiswa('M.Faris', '2311104017', ['SE', 'KPL'], 2023),
  new Mahasiswa('Nizar Daffa Maulana', '2311104019', ['SE', 'KPL'], 2023),
  new Mahasiswa('Tegar Kang Ageng Gilang', '2311104018', ['SE', 'KPL'], 2023),
];

// Swagger setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mahasiswa API',
      version: '1.0.0',
      description: 'API for managing Mahasiswa data',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'server',
      },
    ],
  },
  apis: ['./mahasiswa.js'], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(options);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * tags:
 *   name: Mahasiswa
 *   description: Mahasiswa management API
 */

/**
 * @swagger
 * /Mahasiswa:
 *   get:
 *     summary: Returns the list of all Mahasiswa
 *     tags: [Mahasiswa]
 *     responses:
 *       200:
 *         description: The list of Mahasiswa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mahasiswa'
 */
app.get('/api/Mahasiswa', (req, res) => {
  res.json(mahasiswaList);
});

/**
 * @swagger
 * /Mahasiswa/{id}:
 *   get:
 *     summary: Get a Mahasiswa by id
 *     tags: [Mahasiswa]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Mahasiswa index
 *     responses:
 *       200:
 *         description: The Mahasiswa description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mahasiswa'
 *       404:
 *         description: Mahasiswa not found
 */
app.get('/api/Mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < mahasiswaList.length) {
    res.json(mahasiswaList[id]);
  } else {
    res.status(404).json({ message: 'Mahasiswa not found' });
  }
});

/**
 * @swagger
 * /Mahasiswa:
 *   post:
 *     summary: Create a new Mahasiswa
 *     tags: [Mahasiswa]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mahasiswa'
 *     responses:
 *       200:
 *         description: The Mahasiswa was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mahasiswa'
 *       500:
 *         description: Some server error
 */
app.post('/api/Mahasiswa', (req, res) => {
  const { Name, Nim, Course, Year } = req.body;
  const newMahasiswa = new Mahasiswa(Name, Nim, Course, Year);
  mahasiswaList.push(newMahasiswa);
  res.status(201).json(newMahasiswa);
});

/**
 * @swagger
 * /Mahasiswa/{id}:
 *   delete:
 *     summary: Remove the Mahasiswa by id
 *     tags: [Mahasiswa]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Mahasiswa index
 *     responses:
 *       200:
 *         description: The Mahasiswa was deleted
 *       404:
 *         description: Mahasiswa not found
 */
app.delete('/api/Mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < mahasiswaList.length) {
    mahasiswaList.splice(id, 1);
    res.json({ message: 'Mahasiswa deleted successfully' });
  } else {
    res.status(404).json({ message: 'Mahasiswa not found' });
  }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Mahasiswa:
 *       type: object
 *       required:
 *         - Name
 *         - Nim
 *         - Course
 *         - Year
 *       properties:
 *         Name:
 *           type: string
 *           description: The name of the student
 *         Nim:
 *           type: string
 *           description: The student ID
 *         Course:
 *           type: array
 *           items:
 *             type: string
 *           description: List of courses
 *         Year:
 *           type: integer
 *           description: The enrollment year
 *       example:
 *         Name: Raihan Sastra Wibyanto
 *         Nim: 2311104020
 *         Course: ["SE", "KPL"]
 *         Year: 2023
 */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/swagger`);
});
