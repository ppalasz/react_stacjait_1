import React, { Component } from 'react';
import Item from '../components/Item.js';
import Title from '../components/Title.js';
import Menu from '../components/Menu.js';

class Data extends Component {
  text = "Data"
  state = {
    data : null
  };

  componentDidMount() {

    var url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    if(this.state.data != null)
    {
      const d = this.state.data.map(item => <Item key={Math.random()} id={item.id} title={item.title} />)

      return (<div><Title text={this.text} />
        <Menu /><div>{d}</div></div>)
    }
    else
    {
      return (<div><Title text={this.text} />
        <Menu /><div>...fetching data</div></div>)
    }
  }
}

export default Data;
