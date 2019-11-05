const db = require('../database/db_connection');

const details = id => {
    return db.query('select * from courses where course_id=$1', [id])
}

module.exports = {
    details
}