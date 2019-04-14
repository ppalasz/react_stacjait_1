import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Redirect404 extends Component {
  state = {
    redirect: false,
}

componentDidMount() {
  setTimeout(() => {
      this.setState({
          redirect: true,
      })
  }, 500)
}

  render() {
    if (this.state.redirect) {
      return (
        <div>
        <h1>404</h1>
        <Redirect to = "/start"  />
        </div>
      );
    }

    return (
      <div>
      <h1>404</h1>
      ...redirecting to Start
      </div>
    );
  }
}

export default Redirect404;
