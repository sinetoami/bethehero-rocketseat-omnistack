const db = require('../database/connection_db');

module.exports = {
  async index(request, response) {
    const ongId = request.headers.authorization;
    const incidents = await db('incidents').where('ongId', ongId)
      .select('*');

    return response.json(incidents);
  },
};
