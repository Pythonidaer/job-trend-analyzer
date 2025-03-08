import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>Job Trend Analyzer</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/job-trends">Job Trends</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
