import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to Job Trend Analyzer</h1>
      <p>Discover the latest trends in the job market</p>
      <Link to="/job-trends">View Job Trends</Link>
    </div>
  )
}

export default Home
