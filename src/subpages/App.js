import React, { Component } from 'react';
import './App.css';
import Title from '../components/Title.js';
import Section from '../components/Section.js';
import Footer from '../components/Footer.js';
import Counter from '../components/Counter.js';
import Menu from '../components/Menu.js';

class App extends Component {
  text="empty"

  state = {
    //id: this.props.match.params.id
  }

  constructor(props) {
    super()
    this.text = props.text
    //this.id = props.params.id

  }

  render() {


    return (
      <div>
        <Title text={this.text} />
        <Menu />
        <Section text="sekcja 1" />
        <Section text="sekcja druga" />
        <Counter value="3" />
        <Counter value="37" />
        <Footer />
      </div>
    );
  }
}

export default App;
