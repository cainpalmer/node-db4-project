
// Server Variables
const express = require('express')
const recipesRouter = require('./recipes/recipes-router')
const server = express()


// Use Server
server.use(express.json())

server.use('/api/recipes', recipesRouter)

router.use('*', (req, res) => {
    res.json({api: 'up'})
})

// Exports
module.exports = server