# Project Spec

![Cover](../assets/cover.png)

## 0. Project Overview

_To be completed..._

**Job Trend Analyzer** (JTA) is a productivity tool that is looking to **identify skills patterns across a variety of job postings and titles**, starting with the pursuit of a successful MVP. (needs work)

JTA currently has a team of one software engineer [Jonathan Hammond](https://www.linkedin.com/in/jonamichahammo). This project is designed with the intention of gaining re-employment, while also building a tool that helps users find work in the meantime. The build-time deadline for this project is June 1st, 2025.

My goal as the frontend architect of this project is to **design the architecture of JTA's user-facing web application**. This includes gathering requirements, designing an architecture that meets those requirements, and releasing project updates on LinkedIn during implementation.

## 1. Job Trend Analyzer Software System

_To be completed..._

_This section describers the entire JTA software system. This includes the users of the system, as well as all the applications, databases, and APIs the system is made of. The application that we're building (the user-facing web app) is a part of this system._

### System Context

_To be completed..._

_This is a zoomed out view of the JTA system and the context around it. The system context diagram below follows the guidelines of the C4 Model for visualizing software architecture._

#### System Users

- **👩🏻 User** — Job Seekers tracking the skills and phrases they see on job postings. They use the User Web App client to upload job role descriptions and highlight skills (hard and soft), as well as job role phrases, to identify patterns for items commonly in demand, and use this to focus on what to either add on their resume or upskill on.

#### External Systems

- **Emailing System** — Emailing system used by JTA's applications to notify users on updates, such as when the product will be available for usage.

- **JTA Admin System** — Software system used by JTA's employees (me) manage and moderate the JTA system.

#### System Context Diagram

![System Context Diagram](../assets/system-context-diagram.png)

### System Containers

_To be completed..._

_These are the building blocks of the system. Use this list as well as the system context diagram above to build the container diagram for the Job Trend Analyzer software system._

- **Customer Web App** — This is the app that we're designing the architecture for. It's a web application used by customers to search for restaurants and make food delivery orders.
- **Restaurant Web App** [React SPA] — The web application used by restaurants to receive orders and update their status and manage their menu options.
- **Driver Mobile App** [Native iOS + Android] — The app used by Drivers to collect orders from restaurants and deliver them to customers.
- **Core API** [Java Spring Boot] — REST API used by all mobile and web apps within the system to manage customer information, orders, and restaurant menu items. The Core API also acts as a gateway to external systems (i.e. third-party payment and admin systems.)
- **Core Database** [MySQL] — Main data store for the application. The Core API reads from and writes to this database.
- **WebSockets Server** [Socket.io] — Used to communicate real-time events with registered clients (e.g. updating order status or broadcasting a driver's location.)

#### Container Diagram

_To be completed... by you! See Exercise 1 for more details._

---

## 2. Job Trend Analyzer Customer Web Application

_To be completed..._

_This section describes the customer-facing application in more detail. It's meant to give you a high-level understanding of the app we're designing the architecture for, and it should have enough information to complete the exercises in the workshop._

### UI Designs

_To be completed..._

👉🏽 Check out the [Figma spec](https://www.figma.com/design/cKot2kO0cg2PpR3QwgppXm/Job Trend Analyzer-Spec?node-id=0-1&t=gBOwglj8jVc5t9JR-1).

_Note: This is not an **actual** UI spec—it's just screenshots from Uber Eats with a different logo. We'll refer to the spec in a few modules, but it's provided mainly for illustration purposes. UI copyright belongs to Uber Eats._

![Screenshot of Figma Spec](../assets/figma-ui.png)

### Functional Requirements

_This section lists some of the main functional requirements of Job Trend Analyzer's web app. This is more of a functionality overview to help guide some of your architectural decisions._

#### Authentication

- Customers can browse the app without being authenticated.
- Customers can create an account using email, phone number, or social media accounts.
- Customers can authenticate using their created account credentials.
- Authenticated customers can update their profile information.
- Authenticated customers can reset their passwords if forgotten.

#### Browsing and Searching

- Customers can browse restaurants and food items without authentication.
- Customers can search for restaurants by name.
- Customers can search for restaurants by type of food.
- Customers can filter search results by various criteria (e.g., ratings, delivery time, distance).

#### Favorites and Recommendations

- Authenticated customers can add restaurants to their favorites.
- Authenticated customers can add food items to their favorites.
- The app can provide personalized restaurant and food item recommendations based on customer preferences and order history.

#### Ordering Food

- Customers can add food items to a shopping cart (with or without authentication).
- Customers can customize food items (e.g., add toppings, select portion size).
- Customers can apply promo codes or discounts to their orders.
- Customers can place an order from a restaurant, including multiple items per order (only authenticated customers).
- Customers can schedule orders for later delivery or pickup.

#### Payment

- Customers can choose from multiple payment methods (e.g., credit/debit cards, digital wallets).
- Customers can save payment information for future orders.
- Customers can view an order summary and total cost before confirming the order.
- Customers can receive an email confirmation with a digital receipt after placing an order.

#### Order Tracking

- After placing an order, customers can see a real-time tracker of their order status.
- Customers receive notifications about their order status (e.g., order confirmed, food being prepared, out for delivery).
- Once an order is out for delivery, customers can see a real-time map showing the driver's current location.
- Customers can contact the delivery driver or the restaurant in case of issues.

#### Ratings and Reviews

- Customers can rate and review restaurants and food items after receiving their orders.
- Customers can view ratings and reviews from other users.
- Customers can receive a notification if a restaurant responds to one of their reviews.

### Architectural Requirements

👉🏽 Check out the [requirements doc](requirements.md).
