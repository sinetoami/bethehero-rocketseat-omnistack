// import express from 'express';
const express = require('express');
const cors = require('cors');

// './' sinaliza que é um arquivo e não um pacote
const routes = require('./routes');

const app = express();

app.use(cors());

// informa ao express que será utilizado JSON para o corpo das requisições
// converte o corpo json da requisição em objeto javascript
app.use(express.json());
app.use(routes);

app.listen(3333);
