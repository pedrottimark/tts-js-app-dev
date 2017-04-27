# Exercise 2 - Working with Promises

Using the API at http://jsonplaceholder.typicode.com/ create an app with the following functionality. Use Promises for everything.

1. Login page - Display a login form asking user for a username.
    - On Submit, look up the username entered by the user.
    - If no user is found, display a detailed error message.
    - If the user is found, store user object and render User's homepage
2. User's homepage displays:
    - User's name
    - User's post titles
    - User's albums
3. Post View - Clicking on a post renders a post view, including:
    - Post title
    - Post text
    - A list of comments on the post
    - A back link to the user homepage
4. Album View - Clicking on an album renders the album page, including:
    - Thumbnails of all the photos and the photo's title
    - A search box that filters the photos by title as the user types
    - A back link to the user homepage