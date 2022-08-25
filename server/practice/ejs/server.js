const { response } = require('express');
const express = require('express');

const navs = ['About', 'Contact', 'Gallery'];

const server = express();

server.use(express.json()); //middlewear executes before the server sends the response 
server.use('/css', express.static(__dirname + "/css")); //if you see css, this is where i want you to look 
server.use('/js', express.static(__dirname + "/js"));
server.set('view engine', 'ejs'); //view engine is an accepted value

server.get('/', (req, res) => {
    res.render('pages', {template: 'landing', isAuthenticated: false, navs});
});

server.post('/login', (req, res) => {
    res.json({redirectURL: '/welcome'});
});

server.get('/logout', (req, res) => {
    res.json({redirectURL: '/'});
});

server.get('/welcome', (req, res) => {
    res.render('pages', {template: 'gallery', isAuthenticated: true, navs});
});

server.get('/about', (req, res) => {
    res.render('pages', {template: 'about', isAuthenticated: true, navs});
});

server.get('/contact', (req, res) => {
    res.render('pages', {template: 'contact', isAuthenticated: true, navs});
});

server.get('/gallery', (req, res) => {
    res.render('pages', {template: 'gallery', isAuthenticated: true, navs});
});

server.listen(8080, () => {
    console.log('The server is running at PORT 8080.')
});