import React, { Fragment } from 'react'

const Song = ({lyric}) => {
    if(lyric.length === 0) return null;
    return (
        <Fragment>
            <h2>Letra de Cancion</h2>
            <p className="lyric">{lyric}</p>
        </Fragment>
    );
}
 
export default Song;