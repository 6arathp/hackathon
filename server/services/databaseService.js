const { Pool } = require('pg');
const pool = require('../config/database');
const executeQuery = async (query) => {
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.log(error);
    throw new Error(`Database error: REFRESH THE PAGE${error.message}`);
  }
};

module.exports = { executeQuery };