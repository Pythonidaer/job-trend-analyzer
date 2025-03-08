import { useState, useEffect } from 'react'
import axios from 'axios'

function JobTrends() {
  const [trends, setTrends] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        setLoading(true)
        // Use environment variable for API URL if available, otherwise use relative path
        const baseUrl = import.meta.env.VITE_API_URL || '';
        const response = await axios.get(`${baseUrl}/api/job-trends`)
        setTrends(response.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch job trends')
        setLoading(false)
        console.error('Error fetching job trends:', err)
      }
    }

    fetchTrends()
  }, [])

  return (
    <div>
      <h1>Job Trends</h1>
      
      {loading && <p>Loading...</p>}
      
      {error && <p>{error}</p>}
      
      {!loading && !error && (
        <div>
          {trends.length === 0 ? (
            <p>No job trends found</p>
          ) : (
            <ul>
              {trends.map((trend, index) => (
                <li key={index}>
                  <h3>{trend.title}</h3>
                  <p>{JSON.stringify(trend)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default JobTrends
