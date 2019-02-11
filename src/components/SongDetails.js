import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongDetails extends Component {
    render() {
        if(this.props.song) {
            return (<div>
                <h3>Details for:</h3>
                <div>Title: {this.props.song.title}</div>
                <div>Duration: {this.props.song.duration}</div>
            </div>);
        } else {
            return (<div>Select a Song</div>);
        }
    }
}

const mapStateToProps = state => {
    return {song: state.selectedSongReducer}
};

export default connect(mapStateToProps)(SongDetails);
