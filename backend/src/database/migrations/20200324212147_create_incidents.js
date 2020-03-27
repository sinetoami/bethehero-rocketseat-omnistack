exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    table.increments(); // primary key auto incrementável
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ongId').notNullable();
    table.foreign('ongId').references('id').inTable('ongs'); // chave estrangeira
  });
};

exports.down = function(knex) {
  return knex.dropTable('incidents');
};
