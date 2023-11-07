// app.js

const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
app.use(cors());

// Define your API endpoints here

// ...

app.get('/', (req, res) => {
  res.send('Hello there')
});

// Define the endpoint to fetch categories
app.get('/categories', (req, res) => {
  db.all('SELECT * FROM category', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ categories: rows });
  });
});


// Define the endpoint to fetch subcategories
app.get('/subcategories', (req, res) => {
  db.all('SELECT * FROM sub_category', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ subcategories: rows });
  });
});

// Define the endpoint to fetch duas
app.get('/dua', (req, res) => {
  db.all('SELECT * FROM dua', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ duas: rows });
  });
});

// ...


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
