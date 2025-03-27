# ADR 1: Using React.js for the Dashboard Web App

## Status

Accepted

## Context

As I prepare to begin development of Job Trend Analyzer's new dashboard web application, one key decision that was made is which UI framework we're going to use and what infrastructure we need to deploy it.

The objective is to create a sleek, easy to use, and accurate web application that can meet our users' needs efficiently, and given my unemployment timeline of 2 months, I need ot be strategic about tech stack decisions to ensure low-to-no cost, rapid development, and high-quality output.

## Decision

I have decided to use React.js as the framework for developing Job Trend Analyzer's new dashboard web application and host it on my Railway infrastructure using Node.js and Express middleware.

## Consequences

### Positive Consequences

- **Rapid Development:** Given that I am already familiar with React.js, I can leverage this expertise to accelerate the development process. This will help me meet my tight deadlines without sacrificing quality. Plus I already have it set up.

- **Feature-Rich Framework:** React.js offers a range of features that are beneficial for modern web development, including client-side rendering, and a rich ecosystem that assist with routing, data fetching, UI components and more. These features will enable me to build a sleek, and easy to use application.

- **Flexibility in Deployment:** Although I am not using AWS infrastructure for deployment, I have decided this migration would be worthwhile only when users exceed the resources Railway can provide. This ensures that I can leverage React.js features without being dependent on a a steep cloud learning curve.

- **Community and Ecosystem:** React.js has a strong community and ecosystem, providing me with a wealth of resources and npm packages that can enhance my development process and application capabilities.

### Negative Consequences

- **Initial Setup and Configuration:** Deploying React.js on Railway will eventually cost more and may require additional configuration and setup. While my prototype indicates feasibility, this setup will still require an increase in cost (and potentially a full backend migration) if the product takes off.
