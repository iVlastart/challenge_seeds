const express = require('express');
const cors = require('cors');
require('dotenv').config();
const seeds = require('./seeds.json');

const app = express();

const corsOptions = {
    origin: process.env.ORIGIN
};

app.use(cors(corsOptions));

//responses with the seeds json
app.get('/seeds', (req, res)=>{
    res.status(200).json(seeds.seeds);
});

const PORT = process.env.PORT;

app.listen(PORT, ()=>console.log('The server is running...'));