import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App';
import axios from 'axios';
import Song from './Song';

export default function ViewArtist() {

    const { contentSection } = useContext(AppContext);

    const [ artist, setArtist ] = useState({});
    const [ artistID, setArtistID ] = useState(null);
    const [topSongs, setTopSongs] = useState([]);

    if(contentSection.type === 'artist') {
        setArtistID(contentSection.payload)
    }

    useEffect(() => {

        axios.get(`https://api.deezer.com/artist/${artistID}`)
            .then(res => {
                
                setArtist(res.data);
                
            })
        
        axios.get(`https://api.deezer.com/artist/${artistID}/top?limit=50`)
            .then(res => {
                setTopSongs(res.data.data);
            })
    }, [artistID]);

    return (
        <div>
            <h1>{artist.name}</h1>
            
        </div>
    )
}
