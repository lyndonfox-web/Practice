// const fs = require('fs');

// fs.copyFileSync('file1.txt', 'file2.txt');

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.get('/contact', (req, res) =>
  res.send('<h1>This is the contact page</h1>')
);
app.get('/about', (req, res) => res.send('<p>This is the about page</p>'));
app.get('/hobbies', (req, res) =>
  res.send('<ul><li>Code</li><li>Sermons</li><li>Coffee</li></ul>')
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
