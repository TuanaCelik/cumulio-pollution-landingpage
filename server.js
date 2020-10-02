require('dotenv').config();
const express = require('express');
const { join } = require('path');
const app = express();
const Cumulio = require('cumulio');
// Listen on port 3000
const dashboardId = 'e830af8d-bf1d-4918-963e-884b6c0fc569';

const client = new Cumulio({
    api_key: process.env.CUMULIO_API_KEY,
    api_token: process.env.CUMULIO_API_TOKEN
});

app.use(express.static(join(__dirname, 'public')));

app.get('/authorization', (req, res) => {
    client.create('authorization', {
        type: 'temporary',
        expiry: '1 day',
        inactivity_interval: '30 minutes',
        securables: [dashboardId]
      }).then((result) => {
        return res.status(200).json(result);
    });
    //return res.status(200).json(process.env);
});

app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

app.listen(3000, () => console.log('Application running on port 3000'));