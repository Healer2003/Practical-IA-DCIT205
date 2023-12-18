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
    }


},
{
    timestamps: true
}
)

const Patient = mongoose.model('Patient',mongoose.patientSchema)
module.exports = Patient
