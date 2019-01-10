import React, { Component } from 'react';
import SearchField from './components/SearchField';
import GifCard from './components/GifCard';
import axios from 'axios';
import API_KEY from './api_key';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
  }

  Search = (type, search_string) => { 

    axios.get(`http://api.giphy.com/v1/gifs/${type}?${type === 'search' ? `q=${search_string.split(' ').join('+')}&` :  ''}api_key=${API_KEY}`)
    .then(res => {
      const data = res.data.data;
      console.log(data);
      const search_gifs = data.map((gif) => gif.images.original);
      this.setState({gifs: search_gifs});
    })
    .catch(err => console.error(err));
  }

  componentDidMount() {
    this.Search('trending');
  }

  render() {
    return (
      <div>
        <SearchField update={this.Search} />
        <GifCard gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
