import React, { useEffect, useState } from 'react';

const App = () => {

    const testData = {
        title: "Test Title",
        description: "This is a description for testing purposes.",
        items: [
          { id: 1, name: "Item 1", price: 10 },
          { id: 2, name: "Item 2", price: 20 },
          { id: 3, name: "Item 3", price: 30 },
        ],
      };

  const [data, setData] = useState(testData);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  setData(testData);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        {data.items.map(item => (
          <li key={item.id}>
          Name:  {item.name} and Price: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;