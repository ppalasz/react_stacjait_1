import React, { Component } from 'react';

class Section extends Component {
text="empty"

  constructor(props) {
    super()
    this.text = props.text
 }

  render() {
    return (
      <section className="section">{this.text}</section>
    );
  }
}

export default Section;
