const { model, Schema } = require('mongoose')


const BoardGameSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    minPlayers: {
        type: Number,
        required: true,
    },
    maxPlayers: {
        type: Number,
        required: true,
    },
    minTime: {
        type: Number,
        required: true,
    },
    maxTime: {
        type: Number,
        required: true,
    },
    tags: [{
        type: String,
    }],
    shortDescription: {
        type: String,
    },
    longDescription: {
        type: String,
    },
    price: {
        type: Number,
    },
}, { versionKey: false, timestamps: false, })

BoardGameSchema.statics = {
    createAndValidate: async function ({ name, thumbnail, minPlayers, maxPlayers, minTime, maxTime, tags, shortDescription, longDescription, price, }) {
        console.log(name.toLowerCase().replaceAll(' ', '-'))
        return new this({ name, slug: name.toLowerCase().replaceAll(' ', '-'), thumbnail, minPlayers, maxPlayers, minTime, maxTime, tags, shortDescription, longDescription, price, })
    }
}

const BoardGame = model('BoardGame', BoardGameSchema)

module.exports = BoardGame