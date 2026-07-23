const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Respuesta correcta');
});

app.listen(3000, () => {
    console.log('Puerto arrancado')
});