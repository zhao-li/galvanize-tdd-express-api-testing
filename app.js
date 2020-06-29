const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("hello from express");
});

app.listen(port, () => console.log(
  `hello-express listening at http://localhost:${port}`)
)

module.exports = app
