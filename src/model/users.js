const mongoose = require("mongoose")

var schema = mongoose.Schema

var userSchema = new schema(
    {
        name:{
            type:String,
            required: true
        },
        city:{
            type:String,
            required: true
        },
        telephone:{
            type:Number,
            required: true
        }
    }
) 

module.exports = mongoose.model('users',userSchema)
