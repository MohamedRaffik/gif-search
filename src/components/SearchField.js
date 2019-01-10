import React, { Component } from 'react';

// Class component
class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  render() {
    return (
      <form onSubmit={this.props.update(e, this.state.searchText)}>
        <input 
          type="text" 
          placeholder="Search GIFS" 
          value={this.state.searchText} 
          onChange={(e) => this.setState({searchText: e.target.value})} 
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchField;