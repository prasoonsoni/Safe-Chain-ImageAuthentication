const mongoose = require('mongoose')
const { Schema } = mongoose

const ImagesSchema = new Schema({
    user_id: { type: mongoose.Types.ObjectId, required: true },
    image1: { type: String },
    image2: { type: String },
    image3: { type: String },
    image4: { type: String }
})

module.exports = mongoose.model('Image', ImagesSchema)