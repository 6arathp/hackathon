const { generateSQL } = require('../services/geminiService');
const { executeQuery } = require('../services/databaseService');

const processQuery = async (req, res) => {
  const { query } = req.body;
  
  try {
    const sqlQuery = await generateSQL(query);
    const results = await executeQuery(sqlQuery);
    
    res.json({
      success: true,
      query: sqlQuery,
      results
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = { processQuery };