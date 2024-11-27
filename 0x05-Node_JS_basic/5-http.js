const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let message = 'This is the list of our students\n';
    message += await countStudents(process.argv[2]);
    res.end(message);
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
