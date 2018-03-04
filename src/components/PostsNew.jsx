import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions';
import {
  getHandledError,
  getErrorStyling,
  getTitleError,
  getCategoriesError,
  getContentError
} from './helpers/helpers';

class PostsNew extends Component {
  renderField({ label, input, meta }) {
    const { error, touched } = meta;
    const handledError = getHandledError(error, touched);
    const errorStyling = getErrorStyling(error, touched);

    return (
      <div className={errorStyling}>
        <label>{label}</label>
        <input className="form-control" type="text" {...input} />
        <div className={errorStyling}>{handledError}</div>
      </div>
    );
  }

  onSubmit = values => {
    const { createPost, history } = this.props;
    const home = '/';
    createPost(values, () => history.push(home));
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field label="Content" name="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

const validate = ({ title, categories, content }) => {
  const errors = {
    title: getTitleError(title),
    categories: getCategoriesError(categories),
    content: getContentError(content)
  };

  return errors;
};

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(connect(null, { createPost })(PostsNew));
