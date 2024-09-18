// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const routesStuff = require('./routes/stuff');
const routesUser = require('./routes/user');
const path = require('path');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://mbah_42:Ccumdps2030@cluster0.2s6rt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Successfully connected to MongoDB!'))
    .catch((error) => console.error('Failed to connect to MongoDB!', error));

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); 
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff', routesStuff);
app.use('/api/auth', routesUser);

module.exports = app;
