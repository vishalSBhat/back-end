const express = require('../server').express;
const mongoose = require('mongoose');
const book = require('../model/bookModel');
const router = express.Router();

router.post('/issue', (req, res) => {
    const {
        name,
        id,
        student
    } = JSON.parse(Object.keys(req.body));
    let stud = {
        name: student.name.value,
        usn: student.usn.value,
        branch: student.branch.value,
        year: parseInt(student.year.value)
    }

    book.findOne({
        name
    }, (err, foundBook) => {
        if (err) {
            console.log(err);
            return;
        }
        foundBook.quantity -= 1;
        foundBook.id = foundBook.id.filter(each => each !== parseInt(id.value));
        foundBook.issued.push(stud);
        foundBook.save().then(() => res.send('done'));
    });
});

router.post('/accept', (req, res) => {
    const {
        name,
        id,
        usn
    } = JSON.parse(Object.keys(req.body));
    book.findOne({
        name
    }, (err, foundBook) => {
        if (err) {
            console.log(err);
            return;
        }
        foundBook.id.push(parseInt(id));
        foundBook.issued = foundBook.issued.filter(each => each.usn !== usn);
        foundBook.save().then(() => res.send('done'));
    });
});

module.exports = router;