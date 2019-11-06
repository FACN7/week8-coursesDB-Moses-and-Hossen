const express = require('express');
const { catalog_lists } = require('../queries/catalog');
const { details } = require('../queries/details');
const { remove_course } = require('../queries/remove');

const router = express.Router();

router.get('/home', (req, res) => {
    catalog_lists()
        .then(result => {
            //console.log(result.rows);
            res.render('home', { result: result.rows })
        })
        .catch(err => console.log('catalog err:', err))
});

router.get('/remove/:id', (req, res) => {
    remove_course(req.params.id).then(result => {
        console.log(result);
        res.redirect('/home');
    }).catch(err => console.log('remove err:', err));
})

router.post('/details/:id', (req, res) => {
    details(req.params.id).then(result => {
        console.log(result);
        res.render('details', { description: result.rows[0] });
    }).catch(err => console.log('details err:', err));

})

module.exports = router;