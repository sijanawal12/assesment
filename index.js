
const express = require('express');
const cors = require('cors');

const app = express();

let corOptions = {
    origin: 'https://localhost:8081'
}


//middleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true}))
// router
const router = require('./route/routes.js')
app.use('/api', router)
// testing api
app.get('/', (req, res) => {
    res.json({ message: 'hello'})
})
//port

const PORT = process.env.PORT || 3000

//server

app.listen(PORT, () => {
    console.log(`running on  ${PORT} `)
})




