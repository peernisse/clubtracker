import { useState, useEffect } from 'react'
import axios from 'axios';
import Course from './components/Course.jsx'
import './App.css'

function App() {
  const [usCourseData, setUsCourseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCourseData = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get('http://localhost:8080');
      setUsCourseData(res.data);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching course data.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCourseData();
  }, []);

  console.log('App component state - usCourseData:', usCourseData, 'loading:', loading, 'error:', error);

  return (
      <div>
        <h1 className="title-main">Clubtracker</h1>
        <p className="subtitle-main">Know your game</p>
        
        <button onClick={fetchCourseData} disabled={loading}>
          {loading ? 'Loading...' : 'Refresh data'}
        </button>

        {error && <p className="error">Error: {error}</p>}

        <Course data={usCourseData} /> 

      </div>
  )
}

export default App
