import { useState } from 'react';
import QueryInput from './components/QueryInput.jsx';
import ResultsDisplay from './components/ResultsDisplay.jsx';
import './App.css'
function App() {
  const [results, setResults] = useState([]);
  const [generatedQuery, setGeneratedQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleQuerySubmit = async (naturalQuery) => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: naturalQuery })
      });
      
      const data = await response.json();
      if (data.success) {
        setGeneratedQuery(data.query);
        setResults(data.results);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Failed to process query');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Natural Language to SQL Query</h1>
      <QueryInput onSubmit={handleQuerySubmit} isLoading={isLoading} />
      {error && <div className="error">{error}</div>}
      <ResultsDisplay query={generatedQuery} results={results} />
    </div>
  );
}

export default App;