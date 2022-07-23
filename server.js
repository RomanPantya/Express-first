const http = require('http');

const users = [
  { name: 'nik', age: 30, language: 'rust' },
  { name: 'roma', age: 43, language: 'node' },
];

const server = http.createServer((req, res) => {
  const name = req.url.split('/')[1];

  if (req.method === 'POST') {
    users.push({
      name,
      age: 100,
      language: 'php',
    });

    return res.end('OK');
  }

  const user = users.find((u) => u.name === name);

  res.end(JSON.stringify(user, null, 4));
});