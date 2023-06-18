const knex = require('knex')({
    client: 'pg',
    connection: process.env.DB
});
module.exports = knex