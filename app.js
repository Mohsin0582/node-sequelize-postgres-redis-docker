const express = require('express');
const router = require('./routes');
const dotenv = require('dotenv');
const morgan = require('morgan');
const compression = require('compression');

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('combined'));
app.use(compression());

// app.use('/api', router.AuthenticationRoute);
app.use('/api', router);


const PORT = process.env.PORT || 3300;
app.listen( PORT, () => console.log(`Server is live at localhost:${PORT}`) );
