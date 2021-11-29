import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App';
import axios from 'axios';
import Song from './Song';

export default function ViewArtist() {

    const { contentID } = useContext(AppContext);

    const [ artist, setArtist ] = useState({});
    const [topSongs, setTopSongs] = useState([]);

    useEffect(() => {

        axios.get(`https://api.deezer.com/artist/${contentID}`)
            .then(res => {
                
                setArtist(res.data);
                
            })
        
        axios.get(`https://api.deezer.com/artist/${contentID}/top?limit=50`)
            .then(res => {
                setTopSongs(res.data.data);
                console.log(topSongs)
            })
    }, []);

    return (
        <div>
            <h1>{artist.name}</h1>
            {
                topSongs.length > 0 &&
                topSongs.map(song=>
                    <Song 
                        key={song.id} 
                        song={song}
                    />
                )
            }
        </div>
    )
}
