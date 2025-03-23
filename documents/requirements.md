# Architectural Requirements

This is a living document with the architectural requirements of Job Trend Analyzer's new user-facing web application.

For more information, check out the [Project Spec](./project-spec.md).

## Business Goals

| Stakeholder                 | Goal                                                                                         | Context                                                                                                       |
| --------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Jonathan Hammond (CEO)      | Increase number of job postings per user to 100 and gain 10 users in one month.                                      | As a new player in the market, Job Trend Analyzer needs to attract new customers with their exciting new app. |
| Jonathan (VP of Engineering)   | Improve code quality output by 500%                                                  | The new architecture should allow developers to ship features faster without compromising quality.            |
| Jonathan (Frontend Developer) | Ship code to production confidently, without fear of breaking features        | I want to implement TDD but haven't learned unit testing yet (TO-DO).              |
| Jonathan (Customer Persona)     | Upload job posts easily and immediately crack into the dashboard | Jonathan is out of work and wants to figure out which skills he needs now.                                                       |

## Contraints

| Constraint                                                              | Context                                                                                                                              |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [Technical] Must first be deployed on Railway infrastructure                      | This is a service that provides a free tier for deploying web applications. It might need to change once I get users though!                                                               |
| [Technical] Must be responsive and fully functional on mobile devices   | Nowadays if a developer's website isn't responsive it makes it look like they don't know what they're doing. |
| [Business] Must ship to production by April 2025 (1 month from now) | Job Trend Analyzer needs to work for me soon so that I can get a job. |

## Quality Attributes

### Primary Priorities

| Quality Attribute | Scenario                                                                                              | Priority |
| ----------------- | ----------------------------------------------------------------------------------------------------- | -------- |
| Usability                  | A user of the dashboard web app can understand the visuals presented in 5 seconds or less.	                                                                                                    | High     |
| Accuracy                  | The web app should perfectly and immediately match the data uploaded by the user.	                                                                                                    | High     |
| Learnability                  | Users can quickly pickup how to use the application's features and configurations.                                                                                                    | Medium   |
| Testability                  | Developer workflow abides by Test-Driven Development, resulting in each code being unit tested, as well as linted and tested for complexity.                                                                                                 | Medium      |
| Responsiveness                  | The app should be responsive and fully functional on mobile devices. | Low      |

### Secondary Priorities

| Quality Attribute | Scenario                                                                                              | Priority |
| ----------------- | ----------------------------------------------------------------------------------------------------- | -------- |
| Maintainability   | The developer can easily return to the codebase after a break and make updates without significant ramp-up. | High     |
| Extensibility     | New dashboard views, tagging methods, or user features (e.g., Build Your Own Curriculum) can be added without rewriting core logic. | High     |
| Configurability   | Users can adjust dashboard filters, views, or groupings (e.g., filter by job title or skill-tag type) to personalize their insights. | Low   |
| Performance       | Charts and UI interactions load smoothly, even with a large number of uploaded job postings.           | Medium      |
| Debuggability     | Developers can easily identify and fix issues through clear error messages, logs, and visual dev tools. | Low      |


### Tertiary Priorities

| Quality Attribute | Scenario                                                                                              | Priority |
| ----------------- | ----------------------------------------------------------------------------------------------------- | -------- |
| Accessibility     | Users who rely on keyboard navigation or screen readers can still use the application effectively.    | High     |
| Customizability   | Users can tweak layout preferences or color themes to suit their visual preferences (e.g., high contrast mode). | Medium     |
| Interoperability  | The app can integrate with 3rd party APIs later (e.g., LinkedIn, external learning platforms) without rearchitecting. | Medium   |
| Observability     | The system logs client-side errors or behaviors (e.g., Sentry or logging to console) to help diagnose production bugs. | Low      |
| Reusability       | Frontend components (charts, tagging UI, filters) can be reused across pages or exported to other projects. | Low      |


## Influential Functional Requirements

_To be completed..._

## Other Influencers

_To be completed..._

- Currently, the frontend team is a single developer, who is looking for work.
- The frontend developer on the team has experience working with React and Next.js, and only has backend experience from personal projects.
- I haven't much worked with TypeScript, and am not sure that I want to use it a lot for this project.
