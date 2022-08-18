const { response } = require('express');
const express = require('express'); //step 1. brings code into memory

const server = express(); //step 2. exposes all the stuff that builds the server

server.use(express.json()); //when get a post request, turn it into json

server.get('/name', (req, res) => {
    res.json({
        "firstname": "John", 
        "lastname": "Doe"
    });
});

server.post('/name', (req, res) => {
    //console.log(req.body);
    const {firstname, lastname} = req.body;
    const fullname = firstname +  lastname;
    res.json({"fullname": fullname})
})

server.get('/age', (req, res) => {
    res.json({
        "myAge": "33"
    });
});

server.post('/age', (req, res) => {
    const {myAge} = req.body;
    res.json({"message": `You are ${myAge} years old.`})
});

server.get('/money', (req, res) => {
    res.json({
        "checking": "25.00",
        "savings": "75.00"
    });
});

server.post('/money', (req, res) => {
    const {checking, savings} = req.body;
    const totalMoney = checking + savings;
    res.json({"message": `You have ${totalMoney} dollars in the bank.`})
});

server.get('/digital-crafts/cohort/:year', (req, res) => { //in postman, put an actual year in the url field 
    console.log('year', req.params.year)
    res.json({"message": `I study at the Digital Crafts ${req.params.year} cohort.`});
});

server.get('/user/:user', (req, res) => {
    console.log('user', req.params.user)
    res.json({"message": `Hello, ${req.params.user}.`});
});

// server.post('/user/:user', (req, res) => {
//     console.log('user', req.params.user)
//     res.json({"message": `Hello, ${req.params.user}.`});
// });



server.listen(8080, () => {
    console.log('The server is listening at port 8080.') //step 3.
});


//https://blue-capsule-197789.postman.co/workspace/Server-Practice~87d5e842-ac03-4d3a-9f28-024dfe818776/request/create?requestId=5116c280-be7b-490c-b5b7-92923a7e8691