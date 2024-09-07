const express = require('express');
const dotenv = require('dotenv').config()
const authRouter = require('./routes/authRouter')
const app = express();
require('./config/dbConnect')();

app.use(express.json());
app.use('/api/users',authRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));