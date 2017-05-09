var rp = require("request-promise");

function getPosts() {
    rp("http://jsonplaceholder.typicode.com/posts")
        .then(console.log)
}

module.exports = {
    getPosts: getPosts,
}