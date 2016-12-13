require('sqlite3');

const database = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite',
  },
  useNullAsDefault: true,
});

database.schema.hasTable('notes').then((exists) => {
  if (!exists) {
    return database.schema.createTable('notes', (t) => {
      t.increments('id').primary();
      t.text('title');
      t.text('body');
      t.string('created_at');
      t.integer('flagged');
    });
  }
});

module.exports = database;
