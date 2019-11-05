const express = require('express');
const queries = require('../queries/catalog');

const router = express.Router();

router.get('/home', (req, res) => {
    queries.catalog_lists()
        .then(result => {
            console.log(result.rows);
            res.render('home', { result: result.rows })
        })
        .catch(err => console.log('err:', err))
});

module.exports = router;