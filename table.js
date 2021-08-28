const knex = require("./knexFile"); 

knex.schema.hasTable('Headlinedata').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('Headlinedata', (table) => {
            table.increments('ID')
            table.string('Headline')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});