require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const oN = require('./controllers/openNotify')
let {SERVER_PORT} = process.env;


app.use(bodyParser.json());

app.listen(SERVER_PORT, () =>{
    console.log(`Listening on Port: ${SERVER_PORT}`);
})

app.post('/api/open-notify',oN.create);
app.get('/api/open-notify',oN.read)