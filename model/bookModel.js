const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    id: [],
    author: String,
    quantity: Number,
    issued: [{
        name: String,
        branch: String,
        usn: String,
        year: Number
    }]
});

module.exports = mongoose.model('Book', bookSchema);