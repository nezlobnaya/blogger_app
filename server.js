const express = require('express')
require('dotenv').config()//for loading environment variables
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const MONGO_URI = process.env.MONGO_URI 

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
.then(() => console.log('Mongo Connection successful'))
.catch(err => console.log('err', err))


const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello there!')
})

app.post('/user', (req, res) => {
    console.log('Req',req.body)
    res.send(req.body)
})

app.listen(PORT, () => {
    console.log(`Server is up & running on ${PORT}`)
})