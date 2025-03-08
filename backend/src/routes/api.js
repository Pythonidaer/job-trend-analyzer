import express from 'express';
import { getJobTrends } from '../controllers/jobTrendController.js';
import { setupDatabase } from '../db/database.js';

const router = express.Router();

// Initialize database
setupDatabase();

// Status endpoint for health check
router.get('/status', (req, res) => {
  res.json({ message: 'API is operational', timestamp: new Date().toISOString() });
});

// Job trends endpoints
router.get('/job-trends', getJobTrends);

export default router;
