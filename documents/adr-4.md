# ADR 4: Adhering to Test-Driven Development

## Status

**Accepted**

## Context

- The project is built on a PERN-stack and already utilizes a monorepo structure with separate `/frontend` and `/backend` directories.
- Industry standards and employer expectations favor robust testing practices.
- There is a recognized need to catch errors early and ensure code quality before runtime.
- Currently, the project does not have a formal testing methodology in place.

## Decision

I have decided to adopt the Test-Driven Development (TDD) methodology for this project because:

1. **Proactive Error Detection:** Writing tests before code helps identify issues early in the development process.
2. **Improved Code Quality:** TDD encourages cleaner, modular code, reducing the likelihood of bugs.
3. **Industry Alignment:** Many employers and modern development practices consider testing as a norm, enhancing the project's credibility.
4. **Better Documentation:** Tests serve as a form of living documentation, clarifying the intended functionality and usage of the code. This should help in lieu of the L4 (Code) Level of the C4 Model, where building Code diagrams are advised against due to how often they change. This is in affect a way to automate code documentation, if this is what we are to adhere to.

## Consequences

### Positive Consequences

- **Improved Code Quality:** Encourages modular, well-structured code that is easier to maintain.
- **Early Bug Detection:** Helps catch and resolve issues before they become more serious problems.
- **Enhanced Documentation:** Tests provide a clear, executable specification of the intended behavior.
- **Increased Developer Confidence:** Facilitates safer refactoring and changes, as tests quickly flag regressions.

### Negative Consequences

- **Initial Slowdown:** The upfront time investment for learning about unit testing, TDD, and writing tests will slow down early development.
- **Learning Curve:** Myself being unfamiliar with TDD will require time and training to adopt the methodology effectively.
- **Maintenance Overhead:** Keeping tests up-to-date as the code evolves adds additional workload.
- **Risk of Over-Emphasis on Unit Tests:** May lead to focusing too heavily on unit testing, potentially neglecting integration and end-to-end testing.
