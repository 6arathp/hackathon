const ResultsDisplay = ({ query, results }) => {
    return (
      <div className="results">
        {query && <div className="generated-query">Generated SQL: {query}</div>}
        {results.length > 0 ? (
          <table style={{marginTop:'40px'}}>
            <thead>
              <tr>
                {Object.keys(results[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No results found</p>
        )}
      </div>
    );
  };

  export default ResultsDisplay;