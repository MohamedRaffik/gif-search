import React, { Component } from 'react';
import GifCard from './components/GifCard';
import SearchField from './components/SearchField';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifs: []
    }
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
