import React, { Component } from 'react';

class Counter extends Component {

 constructor(props) {
  super()
  this.state = { value: 1 * props.value }
}

 ChangeCounter = (v) =>
 this.setState(prevState => {
     return{
      value: prevState.value + v
     }
 })

  render() {
    return (
      <div className="counter">
        <button className="left" onClick={()=>this.ChangeCounter(-1)}>-</button>
        {this.state.value}
        <button className="right" onClick={()=>this.ChangeCounter(1)}>+</button>
        </div>
    );
  }
}

export default Counter;
