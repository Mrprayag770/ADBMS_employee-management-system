const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    gender: String,
    status: String,
    salaryy: String,
    Phoneno: String,
    Phoneno: String,
    depid: String



})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;