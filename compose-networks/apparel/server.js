const e = require('express');
const express = require('express');
const { Client } = require('pg');
const HOST = '0.0.0.0';
const PORT = 80;
const app = express();

app.get('/', (req, res) => {

  const client = new Client({
    user: 'postgres',
    host: 'db',
    password: 'erika'});

  client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    }
    else {
      console.log('Connected')
    }
  })
  console.log("root url fetched.");

  client.query('SELECT * FROM apparel;', (err, response) => {
    if (err) {
      console.error('query error', err.stack)
    }
    else {
      console.log("Response received")
      res.json(response.rows)
    }
  });
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);



// const express = require('express');
// const HOST = '0.0.0.0';
// const PORT = 80;
// const app = express();

// const { Pool } = require('pg')

// app.get('/', (req, res) => {
//   const pool = new Pool()
//   pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack)
//   }
//   client.query('SELECT NOW()', (err, result) => {
//     release()
//     if (err) {
//       return console.error('Error executing query', err.stack)
//     }
//     console.log(result.rows)
//   })
// })