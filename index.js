const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000 || process.env.PORT
const connectToDatabase = require('./database/connection')
const getUser = require('./middleware/getUser')
app.use(cors())
app.use(express.json())
app.use(getUser)
connectToDatabase()
global.__basedir = __dirname

app.get('/', (req, res) => {
    res.send("Image Authentication Backend Working")
})
app.use('/image', require('./routes/imagesRoutes'))

app.listen(port, () => {
    console.log(`Image Authentication Backend listening on http://localhost:${port}`)
})