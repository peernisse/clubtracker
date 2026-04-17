// App.jsx
import { useState, useEffect } from 'react'
import axios from 'axios'
import Course from './components/Course.jsx'
import './App.css'

function App() {
  const [usCourseData, setUsCourseData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Theme: 'light' | 'dark'
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const fetchCourseData = async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await axios.get('http://localhost:8080')
      setUsCourseData(res.data)
    } catch (err) {
      setError(err.message || 'An error occurred while fetching course data.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCourseData()
  }, [])

  return (
    <div className="app-root">
      <header className="app-header">
        <div>
          <h1 className="title-main">Clubtracker</h1>
          <p className="subtitle-main">Know your game</p>
        </div>

        <div className="app-controls">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="theme-toggle">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button onClick={fetchCourseData} disabled={loading}>
            {loading ? 'Loading...' : 'Refresh data'}
          </button>
        </div>
      </header>

      {error && <p className="error">Error: {error}</p>}

      <main>
        <Course data={usCourseData} />
      </main>
    </div>
  )
}

export default App
