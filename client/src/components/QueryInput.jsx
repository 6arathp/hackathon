import { useState } from 'react';

const QueryInput = ({ onSubmit, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Try queries like:
  - "Show all employees"
  - "List employees with salary > 50000"
  - "Employees hired after 2020"`}
        disabled={isLoading}
        className="large-input"
        rows={5} // Increase height by default
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Submit'}
      </button>
    </form>
  );
};

export default QueryInput;
