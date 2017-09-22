import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
// TODO: convert this to an API with server side sorting
import content from './content.json';

import Header from './components/Header';
import Content from './components/Content';
import LinkDumpContainer from './components/SlideShow/LinkDump/LinkDumpContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="mainContainer">
          <Header />
          <Route exact={true} path="/" render={() => (<Content content={content.data} />)} />
          <Route exact={true} path="/link-dump" render={route => (<LinkDumpContainer route={route}  />)} />
          <Route exact={true} path="/link-dump/:year" render={route => (<LinkDumpContainer route={route} />)} />
          <Route exact={true} path="/link-dump/:year/:month" render={route => (<LinkDumpContainer route={route} />)} />
          <Route exact={true} path="/link-dump/:year/:month/:day" render={route => (<LinkDumpContainer route={route} />)} />
        </div>
      </Router>
    );
  }
}

export default App;
