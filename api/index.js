const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers/index.js');

router(app, express);

app.listen(
    port,
    (erro)=>{
        if(erro){
            console.log("Erro ao iniciar o servidor");
            console.log(erro);
            return;
        }
        else{
            console.log("Servidor iniciado com sucesso");
        }
    }   
)
