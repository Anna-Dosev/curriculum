require('dotenv').config();
const express = require('express') //instantiate express
const path = require('path');
const sendMail = require('./mail'); //bc this is a local module that we wrote, we need a path ie. the './'

const server = express (); //cache express in server so it has access to methods and properties 

server.use(express.static(path.resolve(`${__dirname}/public`)));
server.use(express.json()); 

server.get('/', (req, res) => {
    res.sendFile('./index.html');
});

server.post('/contact', (req, res) => {
    sendMail(req.body, (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message || 'Internal server error'});
        }
            return res.json({message: 'Message successfully sent'});
    });
});

server.listen(8080, () => {
    console.log('The server is running on port 8080.');
});