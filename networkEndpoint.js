const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.post('/api/echo', (req, res) => {
  res.json({ received: req.body });
});

app.listen(3000, () => {
  console.log('Server on port 3000');
});
