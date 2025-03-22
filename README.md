# Job Trend Analyzer

A web application for analyzing job posting trends and skill requirements.

## Project Structure

```
job-trend-analyzer/
├── assets/               # Generated diagram images and other static assets
├── documents/           # Project documentation and architecture diagrams
│   ├── *.md            # Markdown documentation files
│   └── *.mmd           # Mermaid diagram source files
├── frontend/           # React frontend application
│   ├── public/         # Static public assets
│   └── src/
│       ├── assets/     # Frontend static assets
│       ├── components/ # React components
│       └── pages/      # Page components
└── backend/           # Node.js + Express backend
    └── src/
        ├── controllers/ # Route controllers
        ├── db/         # Database configuration
        ├── models/     # Data models
        └── routes/     # API routes

```

## Architecture Documentation

The project's architecture is documented using the C4 model approach, with diagrams created using Mermaid.js. The diagrams are stored in two formats:
- Source files (`.mmd`) in the `documents/` directory
- Generated PNG files in the `assets/` directory

### Diagram Generation

We use `@mermaid-js/mermaid-cli` to generate static PNG files from our Mermaid diagram sources.

1. Install Mermaid CLI globally:
```bash
npm install -g @mermaid-js/mermaid-cli
```

2. Generate PNG from Mermaid source:
```bash
# Basic usage
mmdc -i input.mmd -o output.png

# Example for our diagrams
mmdc -i documents/system-context.mmd -o assets/system-context.png
mmdc -i documents/container.mmd -o assets/container.png
```

### Available Diagrams

- System Context Diagram (`documents/system-context.mmd`)
  - High-level view of the system and its interactions
  - Generated: `assets/system-context.png`

- Container Diagram (`documents/container.mmd`)
  - Detailed view of the system's containers and their relationships
  - Generated: `assets/container.png`

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
