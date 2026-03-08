---
title: "Building my first MCP"
date: "2026-03-08"
excerpt: "Built an MCP to help me with my workout planning and analysis."
slug: "project-strava-mcp"
---
## Why did I build this?
MCPs have been a hot topic in 2025 and tbh I mostly started using them in early 2026. While using them was fun I kind of wanted to understand how they are implemented, and also this seemed like an easy project to begin with to break my habit of tutorial hell where I do less, watch more.

## What is an MCP?
Any public LLM available to us is trained on certain data, which mostly cannot be the data which is private to you/your company. Now if I want the LLM to get context of this data automatically, meaning not me copy pasting this data, I would provide this data using certain tools, which are shared to everyone using a protocol called MCP (Model Context Protocol)

## Learnings 
- You can think of each tool as automatic and it could be very much like each tool has a single API call behind it, but I realised that this gives the agent a lot of room for non deterministic work. For example lets consider I have 2 tools - "get-recent-activity" and "get-activity-details", now when I ask it to give me data for my latest run, it might only call get-recent-activity and provide me basic stats, which do not include very specific details about this activity, so I kind of hope for the agent to make the second call to "get-activity-details" which might/might not happen depending on the LLM you chose, if it is smart, it will do it, otherwise not. So if I want the task to ideally do these 2 tasks together, I should wrap them in a single tool call so that I can kick away that piece of non-determinism.
- Its a shame I had no previous experience with servers/backend code or how building an API endpoint looks like but this project taught me how to build any basic Oauth flow using access and refresh tokens. I found that code a bit daunting (still do a bit) at first but it felt easier when I broke it piece by piece. 
- Rather than diving deep into courses specific to TS, Express, MCP - when I built this project directly and understood each piece using AI/ on my own, I have realised how practical learning helps you stay motivated as you are constantly working on a problem you like, I will do more projects like this now.

## Tech Stack
- JavaScript
- TypeScript
- Express (used for simulating the login strava flow to get Oauth data)