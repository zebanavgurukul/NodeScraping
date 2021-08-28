const knex = require ("knex");

const connection = {
    client : "mysql",
    connection : {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'india_news'
    }
};

module.exports = knex(connection);