# Architectural Requirements

This is a living document with the architectural requirements of Job Trend Analyzer's new user-facing web application.

For more information, check out the [Project Spec](./project-spec.md).

## Business Goals

| Stakeholder                   | Goal                                                                            | Context                                                                                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Jonathan Hammond (CEO)        | Increase number of job postings per user to 100 and gain 10 users in one month. | As a new player in the market, Job Trend Analyzer needs to attract new customers with their exciting new app.                                                                                   |
| Jonathan (VP of Engineering)  | Improve code quality output by 500%                                             | The new architecture should allow developers to ship features faster without compromising quality. However, usage of AI must be enforced with guardrails such as linters, code review, and TDD. |
| Jonathan (Frontend Developer) | Ship code to production confidently, without fear of breaking features          | Learning Test-Driven Design and low complexity patterns will take time, but is worth it for creating modular, readable, performant, tested, code. But it will take time.                        |
| Jonathan (User Persona)       | Upload job posts easily and immediately crack into the dashboard                | Jonathan is out of work and wants to figure out which skills he needs now - I need to find work in 7 weeks or else I need to consider a new industry.                                           |

## Contraints

| Constraint                                                            | Context                                                                                                                      |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Technical] Must first be deployed on Railway infrastructure          | This is a service that provides a free tier for deploying web applications. It might need to change once I get users though! |
| [Technical] Must be responsive and fully functional on mobile devices | Nowadays if a developer's website isn't responsive it makes it look like they don't know what they're doing.                 |
| [Technical] Must be in the JavaScript and React ecosystem             | I don't hav enough time to learn Angular or work with TypeScript. I want to most learn and build fastest with React.         |
| [Business] Must ship to production by April 2025 (1 month from now)   | Job Trend Analyzer needs to work for me soon so that I can get a job.                                                        |

## Quality Attributes

### Primary Priorities

| Quality Attribute | Scenario                                                                                                                                     | Priority |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Usability         | A user of the dashboard web app can understand the visuals presented in 5 seconds or less.                                                   | High     |
| Accuracy          | The web app should perfectly and immediately match the data uploaded by the user.                                                            | High     |
| Learnability      | Users can quickly pickup how to use the application's features and configurations.                                                           | Medium   |
| Testability       | Developer workflow abides by Test-Driven Development, resulting in each code being unit tested, as well as linted and tested for complexity. | Medium   |
| Responsiveness    | The app should be responsive and fully functional on mobile devices.                                                                         | Low      |

### Secondary Priorities

| Quality Attribute | Scenario                                                                                                                             | Priority |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| Maintainability   | The developer can easily return to the codebase after a break and make updates without significant ramp-up.                          | High     |
| Extensibility     | New dashboard views, tagging methods, or user features (e.g., Build Your Own Curriculum) can be added without rewriting core logic.  | High     |
| Configurability   | Users can adjust dashboard filters, views, or groupings (e.g., filter by job title or skill-tag type) to personalize their insights. | Low      |
| Performance       | Charts and UI interactions load smoothly, even with a large number of uploaded job postings.                                         | Medium   |
| Debuggability     | Developers can easily identify and fix issues through clear error messages, logs, and visual dev tools.                              | Low      |

### Tertiary Priorities

| Quality Attribute | Scenario                                                                                                               | Priority |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| Accessibility     | Users who rely on keyboard navigation or screen readers can still use the application effectively.                     | High     |
| Customizability   | Users can tweak layout preferences or color themes to suit their visual preferences (e.g., high contrast mode).        | Medium   |
| Interoperability  | The app can integrate with 3rd party APIs later (e.g., LinkedIn, external learning platforms) without rearchitecting.  | Medium   |
| Observability     | The system logs client-side errors or behaviors (e.g., Sentry or logging to console) to help diagnose production bugs. | Low      |
| Reusability       | Frontend components (charts, tagging UI, filters) can be reused across pages or exported to other projects.            | Low      |

## Influential Functional Requirements

- Users can browse the app without being authenticated.
- Users can create an account using email or social login (e.g., Google).
  - This requires integration with an authentication service.
  - Follow-up question: How will password recovery be handled?
- Users can sign in and sign out.
- Authenticated users can reset their passwords if forgotten.
- Authenticated users can sign up for email alerts regarding new features.
- Authenticated users can upload job postings through a standardized form.
  - The system should parse the job description text into taggable segments.
  - Follow-up question: How will text parsing be implemented and scaled?
- Users can tag segments of job postings as hard skills, soft skills, or custom phrases.
  - Tagged items should be color-coded based on type.
  - Follow-up question: What mechanism will be used to update or remove tags?
- Users can rate their confidence in tagged skills using a star-review system.
  - Users should be able to create multiple confidence trackers for different job roles.
  - Follow-up question: Should tracker ratings be aggregated for dashboard analytics?
- Authenticated users can generate resumes based on their tagged skills and job postings.
  - This includes "ideal candidate" and "skillbase" resumes with full CRUD functionality.
  - Follow-up question: What export formats should be supported?
- Users can build custom curriculums (B.Y.O.C.) using a card grid interface.
  - The interface should support dynamic addition, rating, and note-taking for skills.
- Authenticated users have access to an interactive dashboard for data visualization.
  - The dashboard may include bar charts, word clouds, heat maps, and pie charts.
  - Follow-up question: How will data filtering and real-time updates be handled?
- The system must enforce a clear boundary between public demo access and private user data.
  - Authenticated users have full CRUD capabilities on their own data.
  - Public (demo) users have read-only access.
- Authenticated users can sign up for notifications regarding new features or updates.
  - Follow-up question: What third-party services should be integrated for email notifications?

## Other Influencers

- Currently, the frontend team is a single developer, who is looking for work.
- The frontend developer on the team has experience working with React and Next.js, and only has backend experience from personal projects.
- I haven't much worked with TypeScript, and am not sure that I want to use it a lot for this project.
- **Data Export and Resume Creation (Optional)**

  - Users can generate “ideal candidate” or “skillbase” resumes based on their tagged skills and job postings.
  - Impact: Enhances user value and product differentiation but isn’t core to the primary job posting and tagging functionality.

- **Build Your Own Curriculum (B.Y.O.C.) (Optional)**

  - Users can create custom curriculums through a dynamic card grid interface to track and rate their skills.
  - Impact: Adds personalized learning and organizational features, though it can be deferred until the core features are stable.

- **Notifications, Automation, and Future Integrations (Optional/Future)**
  - Includes signing up for email alerts and potential future automation (e.g., automatic job posting uploads) or integrations with external APIs.
  - Impact: Improves user engagement and scalability, but these features are non-essential for the initial release.
