// Lib
import React, { Component } from 'react';

// Components
import SongList from './components/SongList';
import SongDetails from "./components/SongDetails";

class App extends Component {
  render() {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column  eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetails />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
