const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000 || process.env.PORT

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Image Authentication Backend Working")
})

app.listen(port, () => {
    console.log(`Image Authentication Backend listening on http://localhost:${port}`)
})