import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PostsIndex from '../components/PostsIndex.jsx';

export default () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={PostsIndex} />
      </Switch>
    </div>
  </Router>
);
