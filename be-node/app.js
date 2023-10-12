const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/node/hello', (req, res) => {
  res.send('Hello from Node!');
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
