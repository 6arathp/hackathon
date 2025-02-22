const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false},
    max: 15,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 4000
});

// Test the database connection on startup
pool.query('SELECT NOW()')
  .then(() => console.log('Database connection established'))
  .catch(err => console.error('Database connection error: PLEASE REFRESH THE PAGE', err.stack));

module.exports = pool;