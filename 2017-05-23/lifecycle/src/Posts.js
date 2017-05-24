import React, { Component } from "react";

export default class Post extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        const { id } = this.props;
        this.getPosts(id);
    }

    componentWillReceiveProps(nextProps){
        const { id: oldId } = this.props;
        const { id: newId } = nextProps;
        if (oldId !== newId) {
            this.getPosts(newId)
        }
    }

    getPosts(id) {
        fetch("http://jsonplaceholder.typicode.com/posts?userId=" + id)
            .then(res => res.json())
            .then(posts => {
                this.setState({
                    posts
                })
            })
    }

    render() {
        return (<div>
            <h3>User id {this.props.id}'s posts</h3>
            <ul>
                {this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>)
    }
}