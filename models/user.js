const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
        name: String
    },
    {timestamps: true, collection: "www"})  



module.exports = mongoose.model('User', userSchema)