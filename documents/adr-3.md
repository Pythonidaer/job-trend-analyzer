# ADR 3: Deciding to Use a Monorepo

## Status

**Accepted**

## Context

- I am building a PERN-stack application (PostgreSQL, Express, React, Node) with a **frontend** (`/frontend`) and a **backend** (`/backend`).
- The frontend uses a **component-based architecture** (React).
- The backend is an Express-based API.
- I want a simpler way to manage dependencies, code sharing, and deployments.

## Decision

I decided to place both the **frontend** and **backend** in a single repository (monorepo) to:

1. **Streamline development**: Easier local setup and consistent tooling for both frontend and backend.
2. **Unify CI/CD**: A single pipeline can test and deploy both frontend and backend.
3. **Simplify versioning**: One repository for all code eliminates the need to synchronize multiple repos.

## Consequences

### Positive Consequences

- **Easier Potential for Collaboration:** Everything works in the same repo, so pull requests and reviews are centralized.
- **Shared Config & Dependencies:** Common ESLint rules, SonarLint configs, environment variables, etc., can be managed in one place.
- **Synchronized Releases:** Both frontend and backend changes are tracked together, reducing version mismatch issues.
- **Streamlined Onboarding:** New developers can clone one repo instead of juggling multiple.

### Negative Consequences

- **Potentially Larger Repo Size:** As the codebase grows, pulling and local development might slow down.
- **Coupled Deployments:** A small change in one service might require redeploying the entire monorepo if not carefully managed.
- **Complexity in Tooling:** Build tools, test runners, and linting might need extra config to handle multiple projects.
- **Access Control Challenges:** If certain teams only need to see the frontend or backend, fine-grained permissions are more complex.
- **Utilization of AI** If the product scales to a point where a foundational model or API is utilized, it is possible that the project expands beyond the monorepo architecture and increases in complexity or messiness.
