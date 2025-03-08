# Job Trend Analyzer

A web application for analyzing job market trends, built with React (Vite) frontend and Node.js/Express backend.

## Project Structure

This project is organized as a monorepo with separate directories for frontend and backend:

```
job-trend-analyzer/
├── frontend/           # React (Vite) frontend
│   ├── src/            # Frontend source code
│   ├── public/         # Static assets
│   └── package.json    # Frontend dependencies
├── backend/            # Node.js/Express backend
│   ├── src/            # Backend source code
│   └── package.json    # Backend dependencies
└── package.json        # Root package.json for workspaces
```

## Local Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/job-trend-analyzer.git
   cd job-trend-analyzer
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both frontend and backend directories
   - Update the values as needed

4. Start the development servers:
   ```
   npm run dev
   ```

This will start both the frontend and backend servers concurrently.

## Deployment

### GitHub

1. Create a new GitHub repository:
   - Go to https://github.com/new
   - Name your repository (e.g., "job-trend-analyzer")
   - Choose public or private visibility
   - Click "Create repository"

2. Push your local repository to GitHub:
   ```
   git remote add origin https://github.com/yourusername/job-trend-analyzer.git
   git branch -M main
   git push -u origin main
   ```

### Frontend Deployment (Netlify)

1. Sign up or log in to Netlify: https://app.netlify.com/

2. Click "Add new site" > "Import an existing project"

3. Connect to your GitHub repository

4. Configure the build settings:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`

5. Add environment variables:
   - VITE_API_URL: Your Railway backend URL (after setting up Railway)

6. Click "Deploy site"

7. After deployment, go to "Site settings" > "Domain management" to set up a custom domain if desired

### Backend Deployment (Railway)

1. Sign up or log in to Railway: https://railway.app/

2. Create a new project and select "Deploy from GitHub repo"

3. Connect to your GitHub repository

4. Add a PostgreSQL database service:
   - Click "New" > "Database" > "PostgreSQL"
   - This will create a new PostgreSQL instance

5. Configure the backend service:
   - Root directory: `backend`
   - Start command: `npm start`

6. Link the PostgreSQL service to your backend:
   - In your backend service, go to "Variables"
   - Railway automatically adds `DATABASE_URL` with the PostgreSQL connection string
   - Add additional environment variables:
     - NODE_ENV: `production`
     - PORT: `5000` (or let Railway assign a port)
     - CORS_ORIGIN: Your Netlify frontend URL

7. After deployment, get your backend URL from the "Settings" tab

8. Update your Netlify frontend with the Railway backend URL as `VITE_API_URL`

## Database

- Development: SQLite (file-based)
- Production: PostgreSQL (hosted on Railway)

The application automatically switches between SQLite and PostgreSQL based on the `NODE_ENV` environment variable.

## API Endpoints

- `GET /api/status`: Check API status
- `GET /api/job-trends`: Get all job trends

## License

[MIT License](LICENSE)
