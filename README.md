# Open Health

Welcome to Open Health, a project created for the 2021 Open Data Hackathon, based on the EURAC biomedic challenge.

## Context

When participants take part on the studies conducted for research purposes, often ask to have some kind of feedback, to see how their data helped the cause.

Also, researchers may need to analyze more than just the data they collected, they may need to collect more data in a more "asynchronous" way, such as by asking questions to the participants.

## The project

OpenHealth aims to be a user-friendly web app that participants can use to get insights of the aggregated data the study has collected, and that allows them to enrich the data based on researchers' additional surveys.

## Features

- Clean, minimal and accessible user interface for a non-tech savvy target
- Extensible integration of health data that the user can provide by itself, also monitoring the measurements over time
- Insights of the aggregated data collected by the main CHRIS study
- Ability for the researchers to post new questionnaires/surveys to collect more data

## Possible future implementations

Time unfortunately works against the developers at hackathons, so here's a couple of ideas that should be implemented next if time wasn't in the equation:

- Provide a way for the users to gather additional insights on their data, based on the data of the entire population of the survey
- Implement all the consent related settings (to adhere with GDPR strict rules)
- Feedback system to get to know what the users think of the system and what can be made better

# Fork me!

If you think this could be a good basis for one of your projects, feel free to do whatever you want with it!

Fork it, branch it, pull it, commit it, you don't even need to mention me if you don't like me, I'm publishing this piece of code as CC0 license, so you can do whatever you want!

# Technical stuff

## Aesthetics considerations

The font used is [Titillium Web](http://nta.accademiadiurbino.it/titillium/) made available by Accademia di Belle Arti di Urbino. I chose this font because it's been used widely in the italian public authority as a highly readable font, even for people with minor visual impairments. Plus, it looks very nice and clean.

The graphic is very minimal and clean, with a light shade of gray as the main color in order to convey the clean look of hospital structures and clinics and to give a high contrast ratio for a high readability index.

This interface has been designed with non-tech people in mind as a use-target, so it has very little distracting elements and very clear and simple to understand text, explaining everything in detail but remaining short.

## Tech stack

This piece of software has been written using Vue 3 with Vite as a local dev server, using Typescript as the main language.

The graphical part has been achieved using Tailwind CSS with the new beta JIT compiler.

The result is a pretty slick workflow, with no hiccups and blazing fast hot reload times.

If time hadn't been an issue, this project would have been accompanied by a backend written in C# using the .NET 6 RC1 framework, accessing data on a SQL Server database via EF Core or via Dapper.

The entire stack would be cross-platform, and the frontend is just a static website, so it could also be published in a headless static files server to save some money on hosting.

## Running a local dev server

Make sure to run `npm install` first, then run `npm run dev`. 

# Important notes

Please note that the site has not been optimized in every aspect, some functionalities don't really work (such as the login page, it's just there for demo purposes), and has been really only tested on a mobile emulator in Chrome DevTools.

That said, the project should grant the jury a general idea of what the final result could look like.

Please keep in mind that if it should end up being used for a production setting, there are many things that should be tackled before going live.

# Credits

Stefano Previato, me team @ Online NOI Hackathon - Open Data Hub edition 2021

2021-10-01 - 2021-10-02
