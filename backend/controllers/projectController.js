const prjModel = require('../models/projectModel')
const mongoose = require('mongoose')

//GET all projects
const getProjects = async (req, res) => {
    const project = await prjModel.find({}).sort({ createdAt: -1 })

    res.status(200).json(project)
}


//GET a single project
const getProject = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such project! ☠️' })
    }

    const project = await prjModel.findById(id)

    if (!project) {
        return res.status(404).json({ error: 'No Such project! ☠️' })
    }

    res.status(200).json(project)
}



//Create New projects
const createProject = async (req, res) => {
    const { projectTopic, projectCategory, projectType, projectTimePeriod, projectDescription, projectTechnologies, projectImage } = req.body

    let emptyFields = []

    if(!projectTopic) {
        emptyFields.push('projectTopic')
    }
    if(!projectCategory) {
        emptyFields.push('projectCategory')
    }
    if(!projectType) {
        emptyFields.push('projectType')
    }
    if(!projectTimePeriod) {
        emptyFields.push('projectTimePeriod')
    }
    if(!projectDescription) {
        emptyFields.push('projectDescription')
    }
    if(!projectTechnologies) {
        emptyFields.push('projectTechnologies')
    }
    if(!projectImage) {
        emptyFields.push('projectImage')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({ error: 'Please fill in all the fields! 🧐', emptyFields })
    }

    //add doc to db
    try {
        const project = await prjModel.create({ projectTopic, projectCategory, projectType, projectTimePeriod, projectDescription, projectTechnologies, projectImage })
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//Delete a project
const deleteProject = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such project! ☠️' })
    }

    const project = await prjModel.findOneAndDelete({ _id: id })

    if (!project) {
        return res.status(404).json({ error: 'No Such project! ☠️' })
    }

    res.status(200).json(project)
}


//Update a project
const updateProject = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such project! ☠️' })
    }

    const project = await prjModel.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!project) {
        return res.status(404).json({ error: 'No Such project! ☠️' })
    }

    res.status(200).json(project)
}



module.exports = {
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
}