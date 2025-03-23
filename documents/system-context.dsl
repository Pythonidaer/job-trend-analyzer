workspace "Job Trend Analyzer" "Job Trend Analyzer App Overview" {
    model {
        user = person "Authenticated User" "Uses the app to upload and analyze job postings."
        admin = person "Admin User" "Manages system issues and user content."

        webapp = softwareSystem "Job Trend Analyzer Web App" "Main system where users upload job postings and view analytics."
        email = softwareSystem "Third-Party Email Provider" "Sends feature updates and notifications." {
            tags "External"
        }

user -> webapp "Uses to upload job postings and view analytics"
admin -> webapp "Uses to manage user content and system issues"
        webapp -> email "Sends email through"
    }

    views {
        systemContext webapp system_context {
            include *
            autolayout lr
        }

        styles {
            element "Person" {
                shape person
                background #1e3a8a
                color #ffffff
            }

            element "Software System" {
                background #dbeafe
                color #1e3a8a
                stroke #1e3a8a
                shape box
            }

            element "External" {
                background #e5e7eb
                color #1f2937
                stroke #6b7280
                shape box
            }

            element "Job Trend Analyzer Web App" {
                background #85BBF0
                color #1e3a8a
                stroke #1e3a8a
                shape box
            }
        }
    }
}
