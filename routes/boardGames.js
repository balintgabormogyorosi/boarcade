const { Router } = require('express')

const BoardGame = require('../models/BoardGame')


const router = Router()

router.get('/', async (req, res) => {
    try {
        const boardGames = await BoardGame.find()
        res.json({ boardGames, })
    } catch (errors) {
        res.status(400).json({ errors, })
        console.log(errors)
    }
})

router.get('/:id', async (req, res) => {
    try {

    } catch (errors) {
        res.status(400).json({ errors, })
    }
})

router.post('/', async (req, res) => {
    try {
        const { name, minPlayers, maxPlayers, minTime, maxTime, tags, shortDescription, longDescription, } = req.body

        let boardGame = await BoardGame.createAndValidate({ name, minPlayers, maxPlayers, minTime, maxTime, tags, shortDescription, longDescription, })
        console.log(boardGame)
        boardGame = await boardGame.save()
        res.json({ boardGame, })
    } catch (errors) {
        res.status(400).json({ errors, })
    }
})

module.exports = router