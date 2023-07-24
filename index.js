// const express = require('express');
// const { MongoClient } = require('mongodb');

// const app = express();
// const port = 9890;
// const mongoUrl = 'mongodb://127.0.0.1:27017/'; // Your MongoDB connection URL

// let db; // This variable will hold the reference to the MongoDB database

// app.get('/', (req, res) => {
//   res.send('You are working on express topic: GET API');
// });

// app.get('/Electronics', (req, res) => {
//   db.collection('Electronics').find().toArray((err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// // Connect to MongoDB


// MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//   if (err) {
//     console.log('Error while connecting:', err);
//     process.exit(1); // Exit the process if there's an error
//   }

//   db = client.db('webitern'); // Specify the correct database name

//   console.log('Connected to MongoDB successfully!');
  
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// });




const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 9890;
const mongoUrl = 'mongodb://localhost:27017/webitern'; // Your MongoDB connection URL

let db; // This variable will hold the reference to the MongoDB database

app.get('/', (req, res) => {
  res.send('You are working on express topic: GET API');
});

app.get('/Electronics', (req, res) => {
  db.collection('Electronics').find().toArray((err, result) => {
    if (err) {
      console.log('Error while fetching data from MongoDB:', err);
      res.status(500).send('Error while fetching data from MongoDB');
      return;
    }
    res.send(result);
  });
});

// Connect to MongoDB
MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.log('Error while connecting to MongoDB:', err);
    process.exit(1); // Exit the process if there's an error
  }

  db = client.db('yourDatabaseName'); // Specify the correct database name

  console.log('Connected to MongoDB successfully!');
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});











