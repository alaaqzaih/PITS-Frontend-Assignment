import React, { useState, useEffect } from 'react';
import UniversityTable from './components/UniversityTable';
function App() {
  const [universities, setUniversities] = useState([]);
  useEffect(() => {
    fetch('http://universities.hipolabs.com/search?country=United+States')
      .then((response) => response.json())
      .then((data) => setUniversities(data.slice(0, 20))) 
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>University Records</h1>
      <UniversityTable universities={universities} />
    </div>
  );
}

export default App;
