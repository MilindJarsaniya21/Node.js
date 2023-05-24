const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath)); // static is method which load static pages of content at publicPath(here).

console.log(__dirname);

app.listen(5000);