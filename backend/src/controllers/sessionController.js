const db = require('../database/connection_db');

module.exports = {
  async create(request, response) {
    const { id } = request.body;
    const ong = await db('ongs').where('id', id).select('name').first();

    if (!ong) {
      // Bad request - 400
      return response.status(400).json({ error: 'No ONG found with this ID' });
    }

    return response.json(ong);
  },
};
