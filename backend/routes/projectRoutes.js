const express = require('express')

const router = express.Router()

//GET all projects
router.get('/', (req, res) => {
    res.json({mssg: 'GET all projects'})
})

//GET a single project
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single project'})
})

//POST a new project
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new project'})
})

//DELETE a project
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a project'})
})

//UPDATE a project
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a project'})
})


module.exports = router