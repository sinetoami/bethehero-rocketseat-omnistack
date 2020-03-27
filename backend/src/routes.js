const express = require('express');
const SessionController = require('./controllers/sessionController');
const OngController = require('./controllers/ongController');
const IncidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/profileController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

// - -------------------------------------------------------------------
// const express = require('express');
// const crypto = require('crypto');
// const db = require('./database/connection_db');

// const routes = express.Router();
// routes.get('/ongs', async (request, response) => {
//   const ongs = await db('ongs').select('*');
//   return response.json(ongs);
// });

// // rota para criar uma nova ong
// // 'async' torna a função assincrona para definir o 'await'
// routes.post('/ongs', async (request, response) => {
//   // const data = request.body;
//   // console.log(data);
//   const { name, email, whatsapp, city, uf } = request.body;

//   // gera 4 bytes de caracteres hexdecimais e converte para string
//   const id = crypto.randomBytes(4).toString('HEX');

//   // para inserir dados dentro do banco
//   // 'await' faz o node aguardar até a operação ser concluída para continuar
//   await db('ongs').insert({ id, name, email, whatsapp, city, uf });

//   return response.json({ id });
// });


// routes.get('/', (request, response) => {
//   return response.json({
//     evento: 'Semana OmniStack 11.0',
//     aluno: 'Sinésio Neto'
//   });
// });

// // Query Params: parâmetros nomeados enviados na rota após '?'
// routes.get('/users', (request, response) => {
//   // acessa todos os parâmetros passados como requisição
//   const params = request.query;
//   console.log(params);
// });

// // Route Params: parâmetros utilizados para identificar recursos
// routes.get('/users/:id', (request, response) => {
//   // acessa parâmetros de recursos requisitados
//   const params = request.params;
//   console.log(params);
// });

// // Request Body: corpo da requisição, utilizado para criar ou alterar recursos
// routes.post('/users', (request, response) => {
//   // acessa o corpo enviado pela requisição
//   const body = request.body;
//   console.log(body);
// });

// module.exports = routes;
