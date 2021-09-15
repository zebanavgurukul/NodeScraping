const knex = require("./connection"); 

let insertData = (insertdata) => {
    return knex('Headlinedata').insert(insertdata)
};

module.exports = {insertData} 