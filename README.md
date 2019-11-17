# Fresh Chalk Coding Challenge

This project is designed to give you an opportunity to demonstrate your approach to building software. Please don't spend more than a couple of hours on it.

## Installation

1. `npm install`
1. `npm start` (runs `webpack-dev-server`)
1. Visit `http://localhost:8080`

## Assignment

This repo contains a partial implementation of autocompleting search, built upon [autocomplete.js](https://github.com/algolia/autocomplete.js/) from Algolia. The code uses an array of state names, but does not properly filter the results based on user input. Your goals are:

1. Fix the code to filter results when the user types.
1. Uncomment the second search input in index.html, and configure [autocomplete.js](https://github.com/algolia/autocomplete.js/) to connect it to the [search api](https://developer.github.com/v3/search/#search-users) at `https://api.github.com/search/users?q=...`. Render the login and id returned from this api the same way that you rendered state name and abbreviation in #1.
1. For extra credit, try to make the autocomplete entries look nicer. For inspiration, you can look at the autocomplete results on Fresh Chalk when you search for business names.

## Requirements

- Both inputs should work at the same time. Don't break #1 when working on #2.
- The code should work properly in the latest version of Chrome. Don't worry about other browsers.
- If you want to pull in small utility libraries like Lodash, be sure to add them to the package file. Please don't incorporate any large frameworks.

## Submission
Please submit your solution as a zip file. If you are using gmail, here's the easiest way:
1. Generate a zip file: `git archive HEAD --format=zip -o solution.zip`
1. [Upload](https://support.google.com/drive/answer/2424368) to google drive.
1. Send as a [drive link](https://support.google.com/mail/answer/2487407).
