const express = require('express');
const morgan = require('morgan');
const { PORT } = require('./config/constants');
const { connect } = require('./commons/services/mongodb');
const router = require('./routes/mainRoutes/mainRoutes');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json()); 
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev')); 
app.use('/',router)
connect();

app.listen(PORT,()=>console.log(`server is listening on http://localhost:${PORT}`));