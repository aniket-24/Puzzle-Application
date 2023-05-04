const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema(
    {
        email: {type: String, required: true},
        password: {type: String, required: true},
        completed: {type: String, required: false}
    }
);

const UsersModel = mongoose.model('users', UsersSchema);

module.exports = UsersModel;

