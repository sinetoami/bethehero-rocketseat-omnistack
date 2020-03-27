const db = require('../database/connection_db');

module.exports = {
  async index(request, response) {
    // irá buscar o parâmetro nomeado 'page'
    // se não existir, terá como valor padrão '1'
    const { page = 1 } = request.query;

    const [count] = await db('incidents').count();
    // console.log(count);

    const incidents = await db('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ongId')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    response.header('X-Total-Count', count['count(*)']);
    return response.json(incidents);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ongId = request.headers.authorization;

    const [id] = await db('incidents').insert({
      title,
      description,
      value,
      ongId,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ongId = request.headers.authorization;

    const incident = await db('incidents')
      .where('id', id)
      .select('ongId')
      .first();

    if (incident.ongId !== ongId) {
      // Unauthorized operation - 401
      return response.status(401).json({ error: 'Operation not permitted.' });
    }

    await db('incidents').where('id', id).delete();

    // no content - 204
    return response.status(204).send();
  },
}
