const mongoose = require('mongoose');

const User = mongoose.model('users', new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: String,
    token: String,
}));



module.exports = User;