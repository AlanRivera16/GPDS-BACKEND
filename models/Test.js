const mongoose = require("mongoose");

const TestSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    apellido:{
        type: String
    },
    edad:{
        type: Number,
        require: false
    },
    deleted: {
        type: Boolean,
        default: false,
    }
}, { timestamps:true});

module.exports = mongoose.model("test", TestSchema);