//Importando path, express e router

const path = require('path');

const express = require('express');

const router = require('./router');

//Executando express e habilitando ejs

const app = express();

app.set('view engine', 'ejs');

//Definindo pasta public como padrão para arquivos estaticos

app.use(express.static(path.join(__dirname, 'public')));

//Definindo roteador a ser usado

app.use(router);

//Adicionando porta do servidor

app.listen(3000, ()=>{
    console.log('Servidor rodando');
});