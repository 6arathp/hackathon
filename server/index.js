require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Add database connection
require('./config/database');

app.use(cors());
app.use(express.json());

// Routes
const queryRoute = require('./routes/queryRoute');
app.use('/api/query', queryRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));