const db = require('../database/db_connection');

// pool.connect().then(client => {

//     const sql = 'SELECT * FROM courses;'

//     return client.query(sql).then(result => {

//         client.release();
//         res.render('book-list', result);
//     }).catch(err => {
//         client.release()
//         console.log(err.stack)
//         res.send('Somthing bad happened')
//     })
// })

const catalog_lists = () => {

    return db.query('SELECT * FROM courses;');
};

module.exports = {
    catalog_lists
}

