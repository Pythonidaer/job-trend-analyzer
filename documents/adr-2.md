# ADR 2: Using Railway's Container Services to Host Backend and Database

## Status

Accepted

## Context

Despite having a full-stack idea requiring full-stack implementation, my focus is primarily to improve my frontend abilities as soon as possible, as to become more employable and regain employment before my unemployment runs out. Since I am on Unemployment for a limited time, I needed something that could spin up fast, easy, and cheap (or ideally free). I had experience with Railway already, and it checked all those boxes.

My objective is to create a dashboard web app that could be appealing to multiple users posting multiple records. Most ideally, the product might someday be profitable. Before I get to that point however, I want to make a product that works for me and helps me find work in a variety of ways (the application itself is a tool for identifying job posting insights). In the event that my product not only gets users but requires a greater amount of resources, it might be possible that in the future, Railway cannot support my userbase.

## Decision

I have decided to use Railway as the hosting platform for my APIs and Postgres database, as it is a cheap and familiar tool, and something I can scale up cheaply until customers compel me to investigate alterantive infrastructure options.

## Consequences

### Positive Consequences

- **Rapid Development:** Considering I already have a full-stack application set up, if I were to have my data models already set up, I could seed them to the database schema this instant. Now, I won't have to worry about backend distractions, and can focus on building out the product, which already requires a lot of full-stack functionality as is. My frontend is hosted on Netlify, and my backend/API and Database are hosted on Railway, already connected and live.

- **Cost Efficient** I have had multiple applications hosted on Railway's free trial for months now. $5 in resources a month is phenomenal, as I already barely max out those resources, so would be able to move from an MVP to alternative versions at the low cost of $5 a month definitively.

- **Cost Efficient** I likely will not have to move on from a $5 a month plan until my product has a few thousand users a month.

### Negative Consequences

- **Initial Setup and Configuration:** Railway deployment specifics are still mostly out of my domain. I set it up in a night with ChatGPT and have done this a few times now. However, it is possible that there are problems that arise in the future that can't be fixed so easily while a user production base interacts with the product. I have already "paid the price" for initial setup, but future configurations (if needed) will definitely take time and energy.

- **Cost:** Currently I am about 50 cents away from running out of Railway's free trial. This means that as of now, in a year's span, this product will run me $60 despite not having any users. And if I do eventually get users, it is possible that I will need to pay $20 or more a month.
