const express = require('express')
const port = 3000
const app = express()

require('./db');
require('./models/User')


const authRoutes = require('./routes/authRoutes');

app.get('/' ,(req,res) => {
    res.send("Test")
})

app.listen(port , () => {
    console.log("Server is running on port " + port);
})