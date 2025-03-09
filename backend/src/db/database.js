import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Load environment variables
dotenv.config();

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Determine database configuration based on environment
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

// Database configuration
let sequelizeConfig = {};
let dbUrl = '';

if (isProduction) {
  // Use PostgreSQL in production
  dbUrl = process.env.DATABASE_URL;
  sequelizeConfig = {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Required for Railway PostgreSQL
      }
    },
    logging: false
  };
} else {
  // Use SQLite in development
  dbUrl = 'sqlite:./database.sqlite';
  sequelizeConfig = {
    dialect: 'sqlite',
    storage: path.join(__dirname, '../../database.sqlite'),
    logging: isDevelopment ? console.log : false
  };
}

// Create Sequelize instance
export const sequelize = new Sequelize(dbUrl, sequelizeConfig);

// Initialize database
export const setupDatabase = async () => {
  try {
    // Test connection
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    // Sync models with database
    await sequelize.sync({ alter: isDevelopment });
    console.log('Database synchronized successfully.');
    
    // Seed initial data if no data exists (both in development and production)
    await seedInitialData();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Seed initial data for development
const seedInitialData = async () => {
  try {
    // Import models dynamically to avoid circular dependencies
    const { JobTrend } = await import('../models/JobTrend.js');
    
    // Check if data already exists
    const count = await JobTrend.count();
    if (count >= 10) {
      console.log('Database already has 10 records, skipping seed.');
      return;
    }
    
    // Sample data
    const sampleTrends = [
      {
        title: 'Frontend Development',
        description: 'React continues to be in high demand, with TypeScript adoption growing rapidly.',
        demand: 'High',
        growth: 15,
        category: 'Web Development',
        source: 'Industry Analysis'
      },
      {
        title: 'Backend Development',
        description: 'Node.js and Python remain popular choices for backend development.',
        demand: 'High',
        growth: 12,
        category: 'Web Development',
        source: 'Industry Analysis'
      },
      {
        title: 'Data Science',
        description: 'Machine learning and AI skills continue to see increased demand.',
        demand: 'Very High',
        growth: 22,
        category: 'Data',
        source: 'Industry Analysis'
      },
      {
        title: 'Cloud Computing',
        description: 'AWS, Azure, and GCP expertise are essential in modern development.',
        demand: 'Very High',
        growth: 25,
        category: 'Infrastructure',
        source: 'Market Research'
      },
      {
        title: 'DevOps',
        description: 'Companies increasingly seek professionals who can automate and streamline deployment processes.',
        demand: 'High',
        growth: 18,
        category: 'Infrastructure',
        source: 'Industry Survey'
      },
      {
        title: 'Cybersecurity',
        description: 'Growing concerns about data breaches drive demand for security experts.',
        demand: 'Very High',
        growth: 20,
        category: 'Security',
        source: 'Security Reports'
      },
      {
        title: 'Mobile Development',
        description: 'Cross-platform frameworks like React Native and Flutter are gaining traction.',
        demand: 'High',
        growth: 14,
        category: 'Mobile',
        source: 'Developer Surveys'
      },
      {
        title: 'Blockchain',
        description: 'Enterprise blockchain solutions create demand for distributed systems expertise.',
        demand: 'Medium',
        growth: 10,
        category: 'Emerging Tech',
        source: 'Tech Trends'
      },
      {
        title: 'UI/UX Design',
        description: 'User experience becomes increasingly critical for digital products.',
        demand: 'High',
        growth: 16,
        category: 'Design',
        source: 'Design Industry'
      },
      {
        title: 'AR/VR Development',
        description: 'Metaverse initiatives drive growth in AR/VR development skills.',
        demand: 'Medium',
        growth: 13,
        category: 'Emerging Tech',
        source: 'Tech Forecast'
      }
    ];
    
    // Only insert new records if we have less than 10
    if (count < 10) {
      // Get the records to insert (skip existing ones)
      const recordsToInsert = sampleTrends.slice(count);
      await JobTrend.bulkCreate(recordsToInsert);
      console.log(`Added ${recordsToInsert.length} new records to reach 10 total records.`);
    }
  } catch (error) {
    console.error('Error seeding initial data:', error);
  }
};
