# Lesson 18 React Router

## React review

Chris Montrois, Frontend Engineer at Slack:

> Slack is transitioning its web client to React. When Slack was first built, our frontend consisted of established technologies like jQuery and Handlebars.

> jQuery’s “render and modify” approach is straightforward, but it’s prone to falling out of sync with the underlying model.

> React’s “render and re-render” pattern makes consistency the default. React makes it easy to write declarative, data-driven user interfaces.

> `PureComponent` includes a predefined `shouldComponentUpdate` method that prevents updates when passed identical props.

Mark Dalgleish, DesignOps Lead at SEEK:

> React’s component model, coupled with its ability to render server-side, finally gives us a way to build complex single-page apps at scale, in a way that still allows us to ship fast, accessible, progressively enhanced products to our users…a single-page React app where the core search flow still works when JavaScript is disabled—gracefully degrading to a traditional web site by running the same JavaScript code on the server.

> If you build your app with progressive enhancement in mind, despite being written entirely in JavaScript, it might not require JavaScript on the client at all.

> The React model is all about components rendering intermediate representations of the final output. This is what allows React Native to work, writing truly native applications in JavaScript, by writing components that render virtual representations of their native counterparts. Instead of `div` and `span`, we have `View` and `Text`.

> This [component model, where semantics, interactivity and visual styling are all united under a single abstraction] forms a common design language, shared between developers and designers alike. Building a page should be as simple as combining an opinionated set of components that ensure our work stays on brand, while allowing us to upgrade our design language long after we’ve shipped to production.

## React Router

Chris Coyier, Founder or CSS-Tricks:

> Having a universal way to jump right to looking at a specific thing is incredible. URLs makes sharing and bookmarking possible.

[React Router](https://reacttraining.com/react-router/)

> Components are the heart of React's powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering.

Let’s watch the video together for about 10 minutes.

## Exercise 1 together

### Change the Lifecycle Demo to a React Router Demo

1. Change directory to your Lifecycle Demo project, and then `npm start`

2. Open your Lifecycle Demo project in an editor.

3. In the `public/index.html` file, change the text in the `title` element to React Router App

4. Replace the `src/index.css` and `src/App.css` files with those files from `2017-05-25/src/*.css`

### Decide on routes

| route | meaning | example |
| --- | --- | --- |
| `/` | home page | |
| `/users` |  list of users | |
| `/users/:userId` | user page | `/users/1` |
| `/users/:userId/albums` | list of albums for user | `/users/1/albums` |
| `/users/:userId/albums/:albumId` | particular album for user | `/users/1/albums/3` |
| `/users/:userId/posts` | list of posts for user | `/users/1/posts` |
| `/users/:userId/posts/:postId` | particular album for user | `/users/1/posts/6` |
| `/users/:userId/todos` | list of todos for user | `/users/1/todos` |
| `/users/:userId/albums/:todoId` | particular todo for user | `/users/1/todos/9` |

### Install router package

1. `npm install --save react-router-dom`

2. In `index.js` add `import` statement

  ```js
  import {BrowserRouter as Router} from 'react-router-dom';
  ```

3. In `index.js` wrap `App` in `Router`

  ```js
  ReactDOM.render((
    <Router>
      <App />
    </Router>
  ), document.getElementById('root'));
  ```

### Use router components

1. Replace the `src/App.js` file with `2017-05-25/src/App.js`

2. Test URLS:

  * Notice in the address bar: http://localhost:3000
  * Click the link to **Users** and notice in the address bar: http://localhost:3000/users
  * Type in the address bar: http://localhost:3000/users/1
  * Type in the address bar: http://localhost:3000/users/1/posts
  * Type in the address bar: http://localhost:3000/users/1/albums

3. Let’s study `App.js` to see what Taylor Jones explains:

  > React Router provides three things we'll need to make this work.

  * `<BrowserRouter>` keeps UI in sync with the browser history.
  * `<Link>` provides declarative navigation around the application.
  * `<Match>` Renders UI when the pattern matches the location.

### Replace HTML link elements with React Router Link elements

In `Album.js`

1. Add an import statement:

  ```js
  import {Link} from 'react-router-dom';
  ```

2. Replace the render method with:

  ```js
  render() {
    const {id} = this.props;
    const {albums} = this.state;
    return (
      <div>
        <h2>Albums for {id}</h2>
        <ul>
          {
            albums.map(album => (
              <li key={album.id}>
                <Link to={`/users/${id}/albums/${album.id}`}>{album.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
  ```

What happens if you click a link to an album? Why?

## Challenge 2 in teams

Add React Router links to `Posts.js`

## Challenge 3 in teams

1. Create a `Users.js` file with a `Users` component that renders a list or table of links to users.

2. Use names for the link text. For more information about the API, see [http://jsonplaceholder.typicode.com/](http://jsonplaceholder.typicode.com/)

3. In `App.js`

  * Import the `Users` component

  * Edit its route to `<Route path="/users" component={Users} />`

## Challenge 4 in teams

1. Create a `User.js` file for a `User` component with an `id` prop that renders information about the user.

2. In `App.js`

  * Import the `User` component

  * Replace its route with

    ```js
    `<Route path="/users/:id" render={(props) =>(
      <User id={props.match.params.id} />
    )} />`
    ```

## Homework

1. Read the following articles:

2. Create a `Album.js` file for an `Album` component with prop `albumId` and add a route to `App.js` for `/users/:id/albums/:albumId`

3. Create a `Post.js` file for an `Post` component with prop `postId` and add a route to `App.js` for `/users/:id/posts/:postId`

### React Router

* [Movie Listings Application with React-Router v4](https://www.sigient.com/blog/movie-listings-application-with-react-router-v-4)

* [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)

* [react-router-firebase-auth/src/Components/*.js](https://github.com/tylermcginnis/react-router-firebase-auth/tree/master/src/components)

### React review

* [Rebuilding Slack’s Emoji Picker in React](https://slack.engineering/rebuilding-slacks-emoji-picker-in-react-bfbd8ce6fbfe)

* [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)

* [What is the Future of Front End Web Development?](https://css-tricks.com/future-front-end-web-development/)
