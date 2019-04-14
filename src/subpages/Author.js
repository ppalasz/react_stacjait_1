import React, { Component } from 'react';
import App from './App.js';


class Author extends Component {

  state = {
    id : 0
  };

  componentDidMount() {
    this.setState({ id : this.props.location.id })
  }

  render() {
    var text = "Author " + this.state.id;

    return (<App text={text} />);
  }
}

export default Author;
