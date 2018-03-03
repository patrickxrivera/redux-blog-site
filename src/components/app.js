import React, { Component } from 'react';

import BookList from '../containers/BookList.jsx';
import BookDetail from '../containers/BookDetail.jsx';

export default App => (
  <div>
    <BookList />
    <BookDetail />
  </div>
);
