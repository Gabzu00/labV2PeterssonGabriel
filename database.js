const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to a databas
function connect() {
  const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
  });
  return db;
}

/* console.log("Hello DELETE from database")
const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});
sql = 'DELETE FROM books WHERE name is null'
db.all(sql, [], (err, rows) => {
  if (err) return reject(err);
})

var sql2 = 'SELECT * from books';
db.all(sql2, [], (err, rows) => {
  if (err) return reject(err);
  console.log(rows);
});; */



//create a table
/* sql = 'CREATE TABLE books(name, genre, date, author)'
db.run(sql); */

// drop table
//db.run("DROP TABLE books");

//select all from database
const getBooks = () => {
  var db = connect();
  return new Promise((resolve, reject) => {
    var sql = 'SELECT * from books';
    db.all(sql, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  })
}

// insert into databse
const addBook = (name, category, date, author) => {
  var db = connect();
  sql = 'INSERT INTO books(name, genre, date, author) VALUES (?,?,?,?)';
  db.run(
    sql,
    [name, category, date, author],
    (err) => {
      if (err) return console.error(err.message);
    }
  )
}

// delete book
const deleteBook = (name, category, date, author) => {
  var db = connect();
  sql = 'DELETE FROM books WHERE name = ? AND genre = ? AND date = ? AND author = ?';
  db.all(sql, [name, category, date, author], (err, rows) => {
    if (err) return console.error(err.message);
  })
}


/* const getBooks = () => {
  var db = connect();
  return new Promise((resolve, reject) => {
    var sql = 'SELECT * from books';
    db.all(sql, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  })

}

module.exports = {
  getBooks,
} */

module.exports = {
  getBooks,
  connect,
  addBook,
  deleteBook,
}