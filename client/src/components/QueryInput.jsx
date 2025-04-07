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
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Enter Query in Natural Language e.g. "all" or "salary more than 150" '
          disabled={isLoading}
          className="large-input"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
      </form>
    );
};

export default QueryInput;
