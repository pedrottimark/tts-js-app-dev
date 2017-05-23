import React, {Component} from "react";

export default class Lifecycle extends Component{
    constructor(){
        super();
        this.state = {
            albums: [],
        }
    }
    
    componentDidMount() {
        const {id} = this.props;
        
        fetch("http://jsonplaceholder.typicode.com/albums?userId=" + id)
            .then(res => res.json())
            .then(albums => {
                this.setState({
                    albums
                })
            })
    }

    render(){
        return (<div>
            <h3>User id {this.props.id}'s albums</h3>
            <ul>
                {this.state.albums.map(album => <li key={album.id}><a href="#">{album.title}</a></li>)}
            </ul>
        </div>)
    }
}