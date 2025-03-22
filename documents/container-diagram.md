# Container Diagram - Job Trend Analyzer

```mermaid
graph TD
    subgraph Users
        User([User])
        Admin([Admin User])
    end
    
    subgraph Frontend Components
        Frontend["Frontend
        (React App)"]
        AdminPanel["Admin Panel
        (React Admin or Custom UI)"]
    end
    
    subgraph Backend Services
        Backend["Backend
        (Node.js + Express API)"]
    end
    
    subgraph External Systems
        Database["Database
        (PostgreSQL)"]
        EmailService["Email Service
        (Mailchimp, SendGrid, etc.)"]
    end

    User -->|Views & interacts with| Frontend
    Admin -->|Manages system via| AdminPanel
    Frontend -->|Makes API calls to| Backend
    AdminPanel -->|Makes API calls to| Backend
    Backend -->|Stores & retrieves data| Database
    Backend -->|Sends notifications via| EmailService