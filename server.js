const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/readiverse';

mongoose.connect('mongodb+srv://Sakshi:Sakshi@123@readiverse.sjhvvgp.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

const express = require('express');
const app = express();
const port = 3000;

// Add your routes and middleware here

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
