const Routes = require('./src/routes/routes')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()

require('./src/database/database')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors({ origin: "*" }))


app.listen(3001, () => {
    console.log('Conectado')
})

app.use(Routes)