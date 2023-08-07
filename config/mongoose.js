const mongoose = require('mongoose')


mongoose.Promise = global.Promise;
mongoose
    .connect(process.env.MONGODB_URI)
    .then(msg => {
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.log('Some error occurred while tried to connect to database')
        console.trace(err)
    })

module.exports = mongoose