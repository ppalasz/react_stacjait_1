import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {

  render() {

    return (
      <menu className="menu">
      <Link to='/start'>Start</Link>
      <Link to='/author?id=2'>Author</Link>
      <Link to='/contact?id=3'>Contact</Link>
      <Link to='/data'>Data</Link>
      <Link to='/404'>404</Link>
      </menu>
    );
  }
}

export default Menu;
