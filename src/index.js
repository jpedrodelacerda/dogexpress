const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send({ mensagem: "A API está em construção" })
})


app.listen(port, () => {
    console.log('Escutando na porta 3000')
})