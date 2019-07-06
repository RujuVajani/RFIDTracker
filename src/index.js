"use strict";

const express = require('express');
const app = express();

exports.__esModule = true;
app.get('/', (req, res) => {
    res.send('Welcome to Server!');
});

app.listen(3000, () => console.log('My app listening on port 3000!'));