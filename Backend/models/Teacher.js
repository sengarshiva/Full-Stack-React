const mongoose = require('mongoose')
const TeacherSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        phone: {
            type: String,
            require: true
        },

        city: {
            type: String,
            require: true
        },
        college: {
            type: String,
            require: true
        },

    }, {timestamps: true})

const TeacherModel = mongoose.model('Teacher', TeacherSchema)
module.exports = TeacherModel