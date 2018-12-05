const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

/* app.use(require('connect').bodyParser()); */

app.get("/status", function(req, res) {
    return res.send('Hello World!');
  });

app.listen(process.env.PORT || 8081)

console.log('hello')