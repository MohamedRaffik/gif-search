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

  Update = (event, type, text) => {
    event.preventDefault();
    this.Search(type, text);
  }

  Search = (type, text) => {
    if (!text) text = ' '; 
    const text_string = text.split(' ').join('+');
    axios.get(`http://api.giphy.com/v1/gifs/${type}?${text ? `q=${text_string}&` :  ''}api_key=${API_KEY}`)
    .then(res => {
      const data = res.data.data;
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
        <SearchField update={this.Update} />
        <GifCard gifs={this.state.gifs} />
      </div>
    );
  }

}

export default App;
