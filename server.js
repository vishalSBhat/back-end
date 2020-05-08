const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const book = require('./model/bookModel');

const app = express();

mongoose.connect('mongodb+srv://admin-V:q1w2e3r4@v-lytod.mongodb.net/BookDB', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, err => {
    if (err)
        console.log(err);
}).then(() => console.log('Successfully connected to database'));

app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

module.exports.express = express;

const bookRoute = require('./routes/libBook');
const studentRoute = require('./routes/student');

app.use('/book', bookRoute);
app.use('/student', studentRoute);



app.listen(8080, console.log('Server started on port 8080'));