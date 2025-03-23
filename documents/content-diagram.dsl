workspace "Job Trend Analyzer" "Container Diagram" {

    !identifiers hierarchical

    model {
        user = person "User" "Uses the app to upload and analyze job postings."
        admin = person "Admin User" "Manages system issues and user content."

        webapp = softwareSystem "Job Trend Analyzer Web App" "Main system for uploading job postings and viewing analytics." {
            reactApp = container "React Web App" "React + Vite" "Frontend UI built with React and Vite"
            adminInterface = container "Admin Interface" "React or Vite" "Admin dashboard used to manage users and data"
            apiServer = container "Core API" "Node.js + Express" "Handles all business logic and routes"
            db = container "PostgreSQL Database" "PostgreSQL" "Stores users, job postings, skills, and trends" {
                tags "Database"
            }
        }

        email = softwareSystem "Third-Party Email Provider" "Sends feature updates and notifications."

        user -> webapp.reactApp "Uses to upload and analyze job postings"
        admin -> webapp.adminInterface "Uses to manage user content and system issues"
        webapp.reactApp -> webapp.apiServer "Sends API requests"
        webapp.adminInterface -> webapp.apiServer "Sends admin API requests"
        webapp.apiServer -> webapp.db "Reads from and writes to"
        webapp.apiServer -> email "Sends transactional and marketing emails"
    }

    views {
        container webapp container_diagram {
            include *
            autolayout lr
        }

        styles {
            element "Person" {
                shape person
                background #1e3a8a
                color #ffffff
            }

            element "Container" {
                background #dbeafe
                color #1e3a8a
                stroke #1e3a8a
                shape box
            }

            element "Database" {
                shape cylinder
                background #e0f2fe
                color #0369a1
                stroke #0369a1
            }

            element "Software System" {
                background #e5e7eb
                color #1f2937
                stroke #6b7280
                shape box
            }

            element "Third-Party Email Provider" {
                background #e5e7eb
                color #1f2937
                stroke #6b7280
                shape box
            }
        }
    }
}
