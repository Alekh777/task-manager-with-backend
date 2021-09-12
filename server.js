const express = require('express');
const app = express();

const todoRoute = require('./routes/todo');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(__dirname + '/public'))

app.use('/todos', todoRoute);

app.listen(80, (req, res)=>{
    console.log('Server running at http://127.0.0.1:80/')
});