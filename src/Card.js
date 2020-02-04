import React from 'react';
import './Card.css';

class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            content: props.content
        };
    }

    render(){
        return (
            <div className="Card">
                <button type="button">delete</button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}


export default Card