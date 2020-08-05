require('dotenv').config() // load .env file
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT || 3000

// register middleware
app.use(bodyParser({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
})