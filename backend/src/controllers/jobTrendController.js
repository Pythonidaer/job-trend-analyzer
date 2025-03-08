import { JobTrend } from '../models/JobTrend.js';

// Get all job trends
export const getJobTrends = async (req, res) => {
  try {
    const jobTrends = await JobTrend.findAll();
    
    // If no data in database, return empty array
    if (!jobTrends || jobTrends.length === 0) {
      return res.json([]);
    }
    
    res.json(jobTrends);
  } catch (error) {
    console.error('Error fetching job trends:', error);
    res.status(500).json({ 
      message: 'Failed to fetch job trends',
      error: error.message 
    });
  }
};
