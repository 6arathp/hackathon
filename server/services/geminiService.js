const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateSQL = async (naturalLanguage) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  
  const tableSchema = `
    [
  {
    "table_name": "employees",
    "column_name": "EMPLOYEE_ID",
    "data_type": "bigint",
    "is_nullable": "NO"
  },
  {
    "table_name": "employees",
    "column_name": "FIRST_NAME",
    "data_type": "text",
    "is_nullable": "YES"
  },
  {
    "table_name": "employees",
    "column_name": "LAST_NAME",
    "data_type": "text",
    "is_nullable": "YES"
  },
  {
    "table_name": "employees",
    "column_name": "EMAIL",
    "data_type": "text",
    "is_nullable": "YES"
  },
  {
    "table_name": "employees",
    "column_name": "PHONE_NUMBER",
    "data_type": "text",
    "is_nullable": "YES"
  },
  {
    "table_name": "employees",
    "column_name": "HIRE_DATE",
    "data_type": "date",
    "is_nullable": "YES"
  },
  {
    "table_name": "employees",
    "column_name": "JOB_ID",
    "data_type": "text",
    "is_nullable": "YES"
  },
  {
    "table_name": "employees",
    "column_name": "SALARY",
    "data_type": "bigint",
    "is_nullable": "YES"
  },
  {
    "table_name": "employees",
    "column_name": "COMMISSION_PCT",
    "data_type": "text",
    "is_nullable": "YES"
  },
  {
    "table_name": "employees",
    "column_name": "MANAGER_ID",
    "data_type": "bigint",
    "is_nullable": "YES"
  },
  {
    "table_name": "employees",
    "column_name": "DEPARTMENT_ID",
    "data_type": "bigint",
    "is_nullable": "YES"
  }
]
  `;

  const prompt = `
    Given this PostgreSQL table schema:
    ${tableSchema}
    
    Generate a SQL query for: ${naturalLanguage}
    
    Return ONLY the SQL query without any explanations or formatting.
    enclose the column name in the query with double quotes
  `;

  try {
    const result = await model.generateContent(prompt);
    console.log(result);
    const response = await result.response;
    console.log("Raw Gemini response:", response.text());
    return response.text().replace(/```sql/g, '').replace(/```/g, '').trim();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error('Failed to generate SQL query REFRESH THE PAGE', error);
  }
};

module.exports = { generateSQL };
