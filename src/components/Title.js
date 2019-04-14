import React, { Component } from 'react';

class Title extends Component {
text="empty"

  constructor(props) {
    super()
    this.text = props.text
    this.state = {
      text: props.text
    }
 }

  render() {
    return (
      <header className="title" >{this.state.text}</header>
    );
  }
}

export default Title;
