//importing express module
const express = require('express');
//port number
const port = 8000;

//Database dired
const db = require('./config/mongoose');
const Task = require('./models/task');

//express fired up
const app = express();
app.use(express.urlencoded());
//using express router
app.use('/', require('./routes'));
//accessing static files
app.use(express.static('assets'));

//Setting-up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Firing up express server
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});