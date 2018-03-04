import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PostsIndex from '../components/PostsIndex.jsx';
import PostsNew from '../components/PostsNew.jsx';

export default () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={PostsIndex} />
        <Route exact path="/posts/new" component={PostsNew} />
      </Switch>
    </div>
  </Router>
);
