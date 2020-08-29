import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Axios from 'axios';
import Song from './components/Song';
import ArtistInfo from './components/ArtistInfo';

function App() {
//states
const [song, setSong] = useState({});
const [lyric, setLyric] = useState('');
const [artistInfo, setArtistInfo] = useState({});


useEffect(() => {
  //distructuring
  const { artist, songTitle } = song;
  const lyricQuery = async () => {
    if(Object.keys(song).length === 0) return;
    const liricsUrl = `https://api.lyrics.ovh/v1/${artist}/${songTitle}`;
    const infoUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`

    //Promise
    const [lyric, info] = await Promise.all([
      Axios(liricsUrl),
      Axios(infoUrl)
    ])

    setLyric(lyric.data.lyrics);
    setArtistInfo(info.data.artists[0]);
  };
  lyricQuery();
}, [song, artistInfo])

  return (
    <Fragment>
      <Form setSong={setSong}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ArtistInfo artistInfo={artistInfo} />
          </div>
          <div className="col-md-6">
            <Song 
              lyric={lyric} 
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
