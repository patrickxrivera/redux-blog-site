import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    const { books, selectBook } = this.props;

    return books.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectBook }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
