const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'api' });
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the API service!', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`API service running on port ${PORT}`);
});
