const knex = require('knex');
const configure = require('../../knexfile');

const db = knex(configure.development);

module.exports = db;
