import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function JobTrends() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastId, setLastId] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 3;
  const isFirstRender = useRef(true); // Track first render

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      fetchTrends();
    }
  }, []);

  const fetchTrends = async () => {
    try {
      setLoading(true);
      const baseUrl = import.meta.env.VITE_API_URL || '';
      const apiUrl = baseUrl.endsWith('/')
        ? `${baseUrl}api/job-trends`
        : `${baseUrl}/api/job-trends`;

      let url = `${apiUrl}?pageSize=${pageSize}`;
      if (lastId) {
        url += `&lastId=${lastId}`;
      }

      console.log('Fetching from URL:', url);
      const response = await axios.get(url);
      const newData = response.data;

      if (newData.length === 0) {
        setHasMore(false);
        setLoading(false);
        return;
      }

      setTrends((prevTrends) => [...prevTrends, ...newData]);
      setLastId(newData[newData.length - 1].id);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch job trends');
      setLoading(false);
      console.error('Error fetching job trends:', err);
    }
  };

  const handleLoadMore = () => {
    fetchTrends();
  };

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
              {trends.map((trend) => (
                <li key={trend.id}>
                  <h3>{trend.title}</h3>
                  <p>{JSON.stringify(trend)}</p>
                </li>
              ))}
            </ul>
          )}
          {hasMore && <button onClick={handleLoadMore}>Load More</button>}
        </div>
      )}
    </div>
  );
}

export default JobTrends;