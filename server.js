const express = require('express');
const { connect } = require('http2');
const app = express();

app.get('/', (req, res)=>{
    
})

app.listen(80, (req, res)=>{
    console.log('Server running at http://127.0.0.1:80/')
});