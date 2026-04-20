const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || 'http://localhost:3001';

app.get('/', async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/api/message`);
    const data = await response.json();
    res.send(`
      <html>
        <body style="font-family: sans-serif; padding: 2rem;">
          <h1>Web Service</h1>
          <p><strong>Message from API:</strong> ${data.message}</p>
          <p><strong>Timestamp:</strong> ${data.timestamp}</p>
        </body>
      </html>
    `);
  } catch (err) {
    res.status(500).send(`<p>Error reaching API: ${err.message}</p>`);
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'web' });
});

app.listen(PORT, () => {
  console.log(`Web service running on port ${PORT}`);
});
