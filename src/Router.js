import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contact from './subpages/Contact.js';
import Start from './subpages/Start.js';
import Author from './subpages/Author.js';
import Data from './subpages/Data.js';
import DataDetail from './subpages/DataDetail.js';
import Redirect404 from './subpages/Redirect404.js';
import {Redirect} from 'react-router-dom';

class Router extends Component {

  constructor(props) {
    super()
  }

  render() {

    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/start" />)}/>
        <Route exact path="/start" component={Start}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/author" component={Author}/>
        <Route exact path="/author/:id" component={Author}/>
        <Route exact path="/data" component={Data}/>
        <Route exact path="/data/:id" component={DataDetail}/>
        <Route component={Redirect404} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
