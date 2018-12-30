import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './article.css';
import './article-images.css';
import './fonts.css';

import Article from './Article';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={() => <Article />} />
          <Route
            path="/progression"
            component={() => <Article progression={true} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
