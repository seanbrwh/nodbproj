require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const oN = require('./controllers/openNotify');
const mes = require('./controllers/Comment')
let {SERVER_PORT} = process.env;


app.use(bodyParser.json());

app.listen(SERVER_PORT, () =>{
    console.log(`Listening on Port: ${SERVER_PORT}`);
})

app.post('/api/open-notify',oN.create);
app.get('/api/open-notify',oN.read);

app.post('/api/comments',mes.create)
app.get('/api/comments',mes.read)
app.put('/api/comments/:id',mes.update)
app.delete('/api/comments/:id',mes.delete)

