const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactFormSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    formBody:{
        type: String,
        required: true,

    }
},  
{timestamps: true});

module.exports = ContactForm = mongoose.model('ContactForm', ContactFormSchema)