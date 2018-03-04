import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  renderList() {
    const { posts } = this.props;

    return _.map(posts, post => {
      const { id, title } = post;

      return (
        <li className="list-group-item" key={id}>
          {title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { posts } = state;
  return { posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
