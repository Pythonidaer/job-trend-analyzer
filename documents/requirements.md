# Architectural Requirements

This is a living document with the architectural requirements of Job Trend Analyzer's new user-facing web application.

For more information, check out the [Project Spec](./project-spec.md).

## Business Goals

_To be completed..._

| Stakeholder                 | Goal                                                                                         | Context                                                                                                       |
| --------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Jonathan Hammond (CEO)      | Increase number of customer orders by 100% in one year                                       | As a new player in the market, Job Trend Analyzer needs to attract new customers with their exciting new app. |
| Megan (VP of Engineering)   | Improve team velocity and cycle time by 25%                                                  | The new architecture should allow developers to ship features faster without compromising quality.            |
| Lauren (Frontend Developer) | Ship code to production confidently, without fear of breaking her teammate's features        | The current big ball of mud architecture makes it hard to visualize the impact of a code change.              |
| Maxi (Customer Persona)     | Order delicious food from his phone or computer and have it delivered as quickly as possible | Maxi is hungry and wants to eat a taco plate right now.                                                       |

## Contraints

_To be completed... (placeholder below)_

| Constraint                                                              | Context                                                                                                                              |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [Technical] Must be deployed on AWS infrastructure                      | Our DevOps team only provides support and monitoring for AWS services.                                                               |
| [Technical] Must be responsive and fully functional on mobile devices   | Over half of our traffic comes from mobile devices and our native mobile application won't be ready to launch for at least 6 months. |
| [Business] Must ship to production by November 2024 (4 months from now) | Job Trend Analyzer is planning a massive marketing launch in November and this product is a key component of the marketing strategy. |

## Quality Attributes

_To be completed below..._

| Quality Attribute | Scenario                                                                                              | Priority |
| ----------------- | ----------------------------------------------------------------------------------------------------- | -------- |
| A                 | A2                                                                                                    | High     |
| B                 | B2                                                                                                    | High     |
| C                 | C2                                                                                                    | Medium   |
| D                 | D2                                                                                                    | Low      |
| E                 | It appears that text that is roughly this long will result in the desired size of the markdown table. | Low      |

## Influential Functional Requirements

_To be completed..._

## Other Influencers

_To be completed..._

- Currently, the frontend team is a single developer, who is looking for work.
- The frontend developer on the team has experience working with React and Next.js, and only has backend experience from personal projects.
- I haven't much worked with TypeScript, and am not sure that I want to use it a lot for this project.
