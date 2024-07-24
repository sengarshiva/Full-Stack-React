const mongoose = require('mongoose')

const CurdSchema = new mongoose.Schema( 
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
        city: {
            type: String,
            require: true
        },


    }, { timestamps: true })
const CurdModel = mongoose.model('curd', CurdSchema)
module.exports = CurdModel