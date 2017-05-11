console.log("JS Loaded")

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function parseResponse(response) {
    return response.json()
}

ready(function () {
    var rootDiv = document.querySelector("#root");

    function clearScreen() {
        rootDiv.innerHTML = "";
    }

    function renderSearchPage() {
        console.log("Rendering Search Page")
        var label = document.createElement("h2");
        label.textContent = "Find User:"
        var input = document.createElement("input");
        var button = document.createElement("button");
        button.textContent = "Go";

        button.addEventListener("click", function () {
            var searchText = input.value;

            fetch("http://jsonplaceholder.typicode.com/users/?username=" + searchText)
                .then(parseResponse)
                .then(jsonResponse => {
                    var user = jsonResponse[0];
                    if (!user) {
                        // TODO place error handler
                    }
                    renderHome(user);
                })
        })

        clearScreen();
        rootDiv.appendChild(label);
        rootDiv.appendChild(input);
        rootDiv.appendChild(button);
    }

    function renderHome(user) {
        var nameDisplay = document.createElement("h2");
        nameDisplay.textContent = user.name;

        var userId = user.id;
        var getPosts = fetch("http://jsonplaceholder.typicode.com/posts?userId=" + userId).then(parseResponse);
        var getAlbums = fetch("http://jsonplaceholder.typicode.com/albums?userId=" + userId).then(parseResponse);

        Promise.all([getPosts, getAlbums])
            .then(function (results) {
                var posts = results[0];
                var albums = results[1];

                var postsDisplay = renderPosts(posts);
                var albumsDisplay = renderAlbums(albums);

                rootDiv.appendChild(postsDisplay);
                rootDiv.appendChild(albumsDisplay);
            })

        clearScreen();
        rootDiv.appendChild(nameDisplay);
    }

    function renderPosts(posts) {
        var containerDiv = document.createElement("div");
        var header = document.createElement("h3");
        header.textContent = "Posts";
        var list = document.createElement("ul");
        posts.forEach(function (post) {
            var entry = document.createElement("li");
            var link = document.createElement("a");            
            link.href = "#";
            link.textContent = post.title;
            link.addEventListener("click", function () {
                renderPost(post);
            });
            entry.appendChild(link);
            list.appendChild(entry);
        })
        containerDiv.appendChild(header);
        containerDiv.appendChild(list);
        return containerDiv;
    }

    function renderAlbums(albums) {
        var containerDiv = document.createElement("div");
        var header = document.createElement("h3");
        header.textContent = "Albums";
        var list = document.createElement("ul");
        albums.forEach(function (album) {
            var entry = document.createElement("li");
            var link = document.createElement("a");
            link.href = "#";
            link.textContent = album.title;
            link.addEventListener("click", function () {
                renderAlbum(album);
            });
            entry.appendChild(link);
            list.appendChild(entry);
        })
        containerDiv.appendChild(header);
        containerDiv.appendChild(list);
        return containerDiv;
    }

    function renderPost(post) {
        console.log("RenderPost called with" + JSON.stringify(post))
    }

    function renderAlbum(album) {
        console.log("RenderAlbum called with" + JSON.stringify(album))

    }

    console.log("App Started")
    renderSearchPage();
})