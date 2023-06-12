import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const urls = [
      'http://104.211.219.98/numbers/primes',
      'http://104.211.219.98/numbers/fibo',
      'http://104.211.219.98/numbers/odd',
      'http://104.211.219.98/numbers/rand'
    ];

    fetch(`http://localhost:port/?url=${urls.join('&url=')}`)
      .then(response => response.json())
      .then(results => setData(results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Numbers</h1>
      {data.map(({ url, numbers }) => (
        <div key={url}>
          <h2>{url}</h2>
          <ul>
            {numbers.map(number => (
              <li key={number}>{number}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
