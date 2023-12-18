const express = require('express')
const mongoose = require('mongoose')
const hospital = express()
const Patient = require('./patientModel')

//middleware
hospital.use(express.json())

hospital.post('/register',async(req,res)=>{
    try{
      const register = await Patient.create(req.body)
      res.status(200).json(register)  
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})





//connecting to mongodb
mongoose.connect('mongodb+srv://Healer:Password1@cluster0.jqwdudm.mongodb.net/Node=API?retryWrites=true&w=majority').then(()=>{
    console.log("connected")
    hospital.listen(3000, (req,res)=>{
        console.log("Running on port 3000")
    })
})

