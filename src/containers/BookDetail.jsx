import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    const { book } = this.props;

    if (!book) return <div>Select a book to start</div>;

    const { title, pages } = book;

    return (
      <div>
        <h1>Details for:</h1>
        <p>Title: {title}</p>
        <p>Pages: {pages}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ book: state.activeBook });

export default connect(mapStateToProps)(BookDetail);
