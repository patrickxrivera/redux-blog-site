import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  handleInputChange = event => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorites cities"
          className="form-control"
          value={searchTerm}
          onChange={this.handleInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
