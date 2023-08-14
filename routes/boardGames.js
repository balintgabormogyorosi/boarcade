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

router.get('/:slug', async (req, res) => {
    try {
        const { slug } = req.params
        const boardGame = await BoardGame.findOne({ slug, })
        res.json({ boardGame, })
    } catch (errors) {
        res.status(400).json({ errors, })
    }
})

router.post('/', async (req, res) => {
    try {
        const { name, thumbnail, minPlayers, maxPlayers, minTime, maxTime, tags, shortDescription, longDescription, price } = req.body

        let boardGame = await BoardGame.createAndValidate({ name, thumbnail, minPlayers, maxPlayers, minTime, maxTime, tags, shortDescription, longDescription, price })
        boardGame = await boardGame.save()
        res.json({ boardGame, })
    } catch (errors) {
        res.status(400).json({ errors, })
    }
})

module.exports = router