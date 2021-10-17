const express = require('express');
const htmlRoute = require('./routes/htmlRoute')
const apiRoute = require('./routes/apiRoute')

//initialze the app and create a port
const app = express();
const PORT =  process.env.PORT || 3001;

//set up body parsing, static, and routing middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', htmlRoute);


//start the server on port

app.listen(PORT, ()=> console.log(`Listening on Port: ${PORT}`));