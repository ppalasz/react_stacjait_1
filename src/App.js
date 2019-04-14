import React, { Component } from 'react';
import './App.css';

class App extends Component {
text="empty"

  constructor(props) {
    super()
    this.text = props.text
    this.state = {
      text: props.text
 }
 this.handleClick = this.handleClick.bind(this)
}

handleClick() {
  this.setState(prevState => {
      return{
        text: prevState.text + "."
      }
  })
}

  render() {
    return (
      <div class="spin-link" onClick={this.handleClick}>{this.state.text}</div>
    );
  }
}

export default App;
