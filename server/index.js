const express = require('express');
const pg = require('pg');
const path = require('path');

const app = express();

const client = new pg.Client({
  user: 'isabell',
  host: 'localhost',
  database: 'acme_hr_db',
  password: 'lalakiwi',
  port: 5432
});

client.connect();

app.use(express.json());

app.get('/api/employees', async (req, res, next) => {
  try {
    const result = await client.query('SELECT * FROM employees');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
