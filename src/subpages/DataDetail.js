import React, { Component } from 'react';
import Item from '../components/Item.js';
import Title from '../components/Title.js';
import Menu from '../components/Menu.js';

class DataDetail extends Component {
  text = "Data Detail"
  state = {
    id : this.props.match.params.id
  };

  componentDidMount() {

    var url = "https://jsonplaceholder.typicode.com/posts"

    if(this.state.id > 0 )
    {
      url += "/" + this.state.id;
    }
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }


  render() {
    if(this.state.data != null)
    {
      var d="";
      if(this.state.id>0)
      {
          var item=this.state.data;
          d= <Item key={Math.random()} id={item.id} title={item.title} body={item.body} />
      }
      else
      {

      }

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

export default DataDetail;
