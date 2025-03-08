const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const projectSchema = Schema({
    title: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true,
        min: 0,
        max: 100000,
    },
    width: {
        type: Number,
        required: true,
        min: 0,
        max: 100000,
    },
    property_type: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String, 
    }
}, {timestamps: true})

const projectModel = mongoose.model('Project', projectSchema);

module.exports = projectModel;