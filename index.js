const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/constants');
const { connect } = require('./commons/services/mongodb');

const user = require('./routes/users');
const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',user);

connect();
app.listen(PORT,()=>console.log(`server is listening on http://localhost:${PORT}`));