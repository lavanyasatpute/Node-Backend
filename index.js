require('dotenv').config()
const express = require('express');
const app = express();
// const port = 30005

app.get('/',(req, res) => {
    res.send('<h1>Hello </h1>')
})

app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on port ${process.env.PORT}`);
    
})