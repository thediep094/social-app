const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const nodemailer = require('nodemailer');

router.post('./verify',(req,res) => {
    console.log("verify route called");
    return res.status(200).json({message: "verify route called"});
})

module.exports = router;