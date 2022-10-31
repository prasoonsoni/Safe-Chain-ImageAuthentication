const express = require('express')
const router = express.Router()
const imagesController = require('../controllers/imagesController')

router.post('/upload', imagesController.uploadImages)

module.exports = router