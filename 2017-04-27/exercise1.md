# Exercise 1

Use jQuery to do the following things with the http://jsonplaceholder.typicode.com/ API:

1. Create buttons that do each of the tasks below
2. Render the results to the page in html elements.
3. Hide the results from the previous actions

- Get all posts
- Get post with id of 10
- Get the comments from post with id of 12 
    
    *note: comments are part of a different data model, you'll need to structure your endpoint to ask for all of the comments that belong to post #12*
- Get all the posts from user with id of 2
- Create a new post and log the id generated for it by the server
- Replace the post with id of 12 and render the responseJSON
- Update the title of post with id of 12 and render responseJSON
- Delete the post with id of 12 and render a success message
- Display a list of posts.
    - When the user clicks on a post, display all the comments from that post
    - Display a link back to all posts