const express = require('express')
const app = express()
const cors = require('cors')
let sql;
const sqlite3 = require('sqlite3').verbose();
const database = require('./database');
const { request } = require('express');

app.use(cors({
  origin: "*",
}))

app.listen(5000, () => {
  console.log("Server listening on port: " + 5000);
})

app.get('/allData', function (req, res) {
  database.getBooks()
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send("Something whent wrong")
    })
})

app.use(express.json({ extended: false }));

app.delete('/deleteData', function (req, res) {

  let name = req.body.name;
  let category = req.body.category;
  let date = req.body.date;
  let author = req.body.author;
  database.deleteBook(name, category, date, author)
  res.sendStatus(200);

})

app.post('/postData', function (req, res) {
  let name = req.body.name;
  let category = req.body.category;
  let date = req.body.date;
  let author = req.body.author;
  database.addBook(name, category, date, author);
  res.sendStatus(200);

})


/* app.get('/dataParam', function (req, res) {
  sendBack = {
    message: "This is lab2",
    name: "Hkr"
  }
  res.json(sendBack)
  res.end();

}) */

