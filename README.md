
# NATURAL LANGUAGE TO SQL QUERY

## Hackathon Challenge: AI-Powered Schema Selection for NL to SQL Pipelines
**Problem Statemnt:** \
Task is to build an AI-driven system that dynamically selects the most relevant tables from a database schema based on a user's Natural Language Query.

### Technologies Used
* ReactJS 
* ExpressJS 
* Gemini 2.0 Flash 
* Supabase

### Project Overview
* User enters query (e.g., "Show all employees hired a certain date").
* ExpressJS backend receives input.
* Gemini API generates an SQL Query from the input.
* ExpressJS send the Query to Supabase PostgreSQL.
* PostgreSQL returns result, and expressJS sends them back to frontend.

## Setup project

### Backend (ExpressJS)

```
cd server
npm install
npm run dev
```

### Frontend (vite and ReactJS)

```
cd client
npm install 
npm run dev
```
\
**Don't forget to setup ENV variavbles.**


