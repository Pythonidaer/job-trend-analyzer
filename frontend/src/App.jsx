import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import JobTrends from './pages/JobTrends'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-trends" element={<JobTrends />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
