const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//recursos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//rutas
app.get('/',(req,res)=> res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/about',(req,res)=> res.sendFile(path.join(__dirname, 'views', 'about.html')));
app.get('/contact',(req,res)=> res.sendFile(path.join(__dirname, 'views', 'contact.html')));
app.get('/music',(req,res)=> res.sendFile(path.join(__dirname, 'views', 'music.html')));

//servidor
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));