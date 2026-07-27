const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Respuesta correcta');
});

app.get('/api/eventos', (req, res) => {
    res.json([
    { fecha: '2026-08-15', lugar: 'Madrid' },
    { fecha: '2026-08-22', lugar: 'Barcelona' },
    ]);
});

app.listen(3000, () => {
    console.log('Puerto arrancado')
});