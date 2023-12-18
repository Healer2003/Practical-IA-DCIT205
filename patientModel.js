const mongoose = require('mongoose')
const patientSchema = mongoose.Schema(
{
    ID:{
        type:String,
        required: true
    },
    Surname:{
        type:String,
        required:[true, "please input patient name"]
    },
    Othernames:{
        type:String,
        required:false
    },
    Gender:{
        type:String
    },
    phoneNumber:{
        type:Number,
        required: true
    }


},
)

const emergencyContact = mongoose.Schema(
    {
        Name:{
            type:String,
            required: true
        },
        Contact:{
            type:Number,
            required:true
        },
        Relationship:{
            type:String
        }

    }
)

const Relative = mongoose.model('Relative',emergencyContact)

const Patient = mongoose.model('Patient',patientSchema)
module.exports = Patient
module.exports = emergencyContact
