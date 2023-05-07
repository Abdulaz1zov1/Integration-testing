const mongoose = require('mongoose')
const express = require('express')
const cors = require("cors");
const app = express()

const {	StatusCodes } = require('http-status-codes')

mongoose
        .connect("mongodb+srv://user:123@cluster0.5wrygo3.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true})
.then(()=>{console.log(`MongoDB Connected`)}).catch((err)=>{console.log("err database")})

const User = require("./models/user")
require("dotenv").config()

app.use(cors());
app.use(express.json());





app.post('/api', (req, response)=>{
    try {
        const user = new User({...req.body})
        user.save()
                response
                        .status(StatusCodes.CREATED).json({
                                                           data: user 
                                                          })
    } catch (err) {
        response
                .status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                                                                  message: "Internal Server Error"
                                                                })
    }
})



app.get('/api', async(req, response)=>{
    try {
        const result = await User.find()
        response
                .status(StatusCodes.OK).json({
                                              data: result
                                             })
    } catch (err) {
        response
                .status(StatusCodes.NOT_FOUND).json({
                                                     message: "Nout Found"
                                                   })
    }
})





const port = process.env.PORT || 3000
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`))


