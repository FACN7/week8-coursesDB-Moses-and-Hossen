const db = require('../database/db_connection');

const remove_course = id => {
    return db.query('DELETE FROM courses WHERE course_id=$1', [id])
}

module.exports = {
    remove_course
}