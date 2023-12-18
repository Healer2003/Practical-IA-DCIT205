const express = require('express')
const mongoose = require('mongoose')
const hospital = express()





//connecting to mongodb
mongoose.connect('url').then(()=>{
    console.log("connected")
    hospital.listen(3000, (req,res)=>{
        console.log("Running on port 3000")
    })
})

