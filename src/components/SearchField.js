import React, { Component } from 'react';

// Class component
class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      type: '',
    };
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.update(e, this.state.searchText, this.state.type)}>
        <input 
          type="text" 
          placeholder="Search GIFS" 
          value={this.state.searchText} 
          onChange={(e) => this.setState({searchText: e.target.value})} 
        />
        <input type="submit" value="Search" onClick={() => this.setState({type: 'search'})} />
        <input type="submit" value="Trending " onClick={() => this.setState({type: 'trending'})} />
        <input type="submit" value="Random" onClick={() => this.setState({type: 'random'})} />
      </form>
    );
  }
}

export default SearchField;