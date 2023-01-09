const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.DB_LINK)

const UserSchema = new Schema({
    email : {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User',UserSchema)