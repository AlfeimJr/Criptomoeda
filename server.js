const express = require('express');
const path = require('path');
const routes = express.Router();

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.get('/home', (req,res)=>{
    res.render('home')
})


app.listen(3000, ()=> console.log('Servidor Iniciado'));