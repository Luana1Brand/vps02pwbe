
require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');


const Alunos = require("./routes/alunos.routes");

//Inicia API
const app = express()
    .use(express.json())
    .use(cors())
    .use("/alunos", Alunos);




app.listen(PORT, () => {
    console.log('API em execução na porta: '+ PORT);
});


