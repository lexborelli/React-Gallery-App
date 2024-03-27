This project, uses the in-demand React library to create an image gallery app.
The app is built in the style of a modern single-page application to keep it fast, modular, and in sync with current web development trends.
I used JSX to write the markup-like syntax directly in my JavaScript files and managed the state in a container component that passes data down to the reusable stateless components. 

Utilizing Vite I set up the initial project, Then:

- I Used JavaScript and JSX to build out the gallery components in a modular fashion.
- Imported React Router to set up routes for three default topic pages and a search page.
- Implemented a tool like Axios to fetch data from the Flickr API and use it to display images in my app.
- Added a browser Navigateion works for the search route; Clicking the browser's forward and back buttons should navigate the user through all search history, keeping the URL and fetched data in sync.
- Included a 404-like error route that displays a user friendly 404 error page when a URL does not match an existing route. 
- Added a loading indicator that displays each time the app fetches new data
- If no matches were found by the search, displayed a friendly user message to inform the user there were no matches. 

Deployed my application using Netlify, My site is:
https://lexborellireactgallery.netlify.app/
