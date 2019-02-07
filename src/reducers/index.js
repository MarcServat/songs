import {combineReducers} from 'redux';

const songsReducer = (songs, action) => {
    return [
        {title: 'Song1', duration: '1:00'},
        {title: 'Song2', duration: '2:00'},
        {title: 'Song3', duration: '3:00'},
        {title: 'Song4', duration: '4:00'},
        {title: 'Song5', duration: '5:00'},
        {title: 'Song6', duration: '6:00'},
        {title: 'Song7', duration: '7:00'},
        {title: 'Song8', duration: '8:00'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({songsReducer, selectedSongReducer});
