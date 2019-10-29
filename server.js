require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');


const employeeController = require('./controller/employeeController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));


app.set('views', path.join(__dirname, '/views/'));
app.engine("hbs", exphbs({extname : "hbs", defaultLayout:"mainLayout", layoutsDir:__dirname + "/views/layouts/"}));  
app.set('view engine', 'hbs');


app.listen(7000, ()=>{
    console.log('Express server started at port : 7000'); 
}) 


app.use('/employee', employeeController);
