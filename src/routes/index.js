const express = require('express');
const multer = require('multer');
const path = require('path');
const { catalog_lists } = require('../queries/catalog');
const { details } = require('../queries/details');
const { remove_course } = require('../queries/remove');



const router = express.Router();

//set storage engine
const storage = multer.diskStorage({
    destination: './public/img/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()
            + path.extname(file.originalname));
    }
})

//Init upload 
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('pic');

//Check file type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    }
    else {
        cb('Error: Images Only!');
    }
}


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

router.get('/add_course', (req, res) => {
    res.render('add_course');
})

router.post('/upload', (req, res) => {

    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            res.render('add_course', { msg: err });
        }
        else {
            console.log(err);
            console.log(req.file);
            res.send('test');
        }
    });
});

router.post('/details/:id', (req, res) => {
    details(req.params.id).then(result => {
        console.log(result);
        res.render('details', { description: result.rows[0] });
    }).catch(err => console.log('details err:', err));

})

module.exports = router;