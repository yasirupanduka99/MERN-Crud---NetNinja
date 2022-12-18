const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new mongoose.Schema({

    projectTopic: {
        type: String,
        required: true
    },
    projectCategory: {
        type: String,
        required: true
    },
    projectType: {
        type: String,
        required: true
    },
    projectTimePeriod: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    projectTechnologies: {
        type: String,
        required: true
    },
    projectImage: {
        type: String,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Projects', projectSchema);