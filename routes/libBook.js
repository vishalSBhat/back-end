const express = require('../server').express;
const mongo = require('mongoose');
const router = express.Router();
const book = require('../model/bookModel');


router.get('/list', (req, res) => {
    book.find({}, (err, bookList) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(JSON.stringify(bookList));
    });
});

router.post('/delete', (req, res) => {
    let {
        name
    } = JSON.parse(Object.keys(req.body));
    book.deleteOne({
        name
    }, err => {
        if (err)
            console.log(err);

    });
});

module.exports = router;