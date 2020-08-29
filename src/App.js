import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Axios from 'axios';

function App() {
//states
const [song, setSong] = useState({});
const [lyric, setLyric] = useState('');

//distructuring
const { artist, songTitle } = song;

useEffect(() => {
  const lyricQuery = async () => {
    if(Object.keys(song).length === 0) return;
    const url = `https://api.lyrics.ovh/v1/${artist}/${songTitle}`;
    const response = await Axios(url);
    setLyric(response.data.lyrics)
  };
  lyricQuery();
}, [song])

  return (
    <Fragment>
      <Form setSong={setSong}/>
    </Fragment>
  );
}

export default App;
