const knex = require("../knexFile"); 

// 1
let post_data = (insertdata) => {
    return knex('Headlinedata').insert(insertdata)
};

// 2
let getid = (ID) => {
    return knex('Headlinedata').select('*').where('ID',ID)
};

module.exports = {post_data,getid} 