import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Item extends Component {

constructor(props) {
  super()
  this.state = {
       id: props.id,
       title: props.title,
       body: props.body
  }
}

  render() {
    //console.log(this.props);
    var link =  '/data/'+ this.state.id;
    return(
        <div className="item" >
        <Link to={link}>{this.state.title}</Link>
        <div>{this.state.body}</div>
        </div>
    )
  }
}

export default Item;
