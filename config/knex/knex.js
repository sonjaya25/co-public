const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'tma.ip-dynamic.com',
        port: 5432,
        user: 'tmadev',
        password: 'userd3v@tm4',
        database: 'SDM'
    }
});

module.exports = knex