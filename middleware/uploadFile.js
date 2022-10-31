const multer = require('multer')
const fs = require('fs')
const util = require('util')
const maxSize = 2 * 1024 * 1024


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = `${__basedir}/images/${req.id}`
        fs.mkdirSync(path, { recursive: true })
        cb(null, path)
    },
    filename: (req, file, cb) => {
        console.log(file.originalname)
        cb(null, file.originalname)
    }
})
const uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize }
}).array("images", 4)

const uploadFileMiddleware = util.promisify(uploadFile)

module.exports = uploadFileMiddleware;