const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const port = 3000

const app = express()

const todoroutes = require('./routes/todoroutes')

app.use(bodyParser.json());
app.use(morgan('combined'))


// app.get('/ping', (req,res) => {
//     res.json({ping: true})
// })

app.use(todoroutes)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

module.exports = app