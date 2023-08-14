require('./config/config')
require('./config/mongoose')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const boardGamesRoutes = require('./routes/boardGames')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, }))
app.use(cors())

app.use('/api/board-games', boardGamesRoutes)

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// Start the application
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}!`);
})