import React, { Component } from 'react';

class Footer extends Component {

  GenerateTime = () =>
  {
    var currentdate = new Date();
    var dt = "current date: " + currentdate.getDay() + "/" +currentdate.getMonth()
          + "/" + currentdate.getFullYear() + " @ "
          + (currentdate.getHours()+'').padStart(2, "0") + ":"
          + (currentdate.getMinutes()+'').padStart(2, "0") + ":"
          + (currentdate.getSeconds()+'').padStart(2, "0") + ":"
          + (currentdate.getMilliseconds()+'').padStart(3, "0")
    return(dt);
  }

  state = {
     dt: this.GenerateTime(),
     isM: false
    }


SetTime = () => {
    if(!this.isM)
    {
      return;
    }
    setTimeout(() => {
      this.setState({
        dt: this.GenerateTime()
      });
      this.SetTime();
  }, 20);

}
componentWillUnmount() {
  this.setState({isM: false});
}

componentDidMount() {
  this.setState({isM: true});
  this.SetTime();
}

  render() {

    return (
      <footer className="footer">{this.state.dt}</footer>
    );


  }
}

export default Footer;
