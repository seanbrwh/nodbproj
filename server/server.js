const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3040;


app.use(bodyParser.json());
app.listen(port, () =>{
    console.log(`Listening on Port: ${port}`);
})

