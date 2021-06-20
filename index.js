const express = require('express');
const morgan = require('morgan');
const { PORT } = require('./config/constants');
const { connect } = require('./commons/services/mongodb');

const user = require('./routes/users');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev')); 
app.use('/',user);

connect();
app.listen(PORT,()=>console.log(`server is listening on http://localhost:${PORT}`));