import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import Song from './Song';

export default function ViewAlbum() {

    const { showSection } = useContext(AppContext);

    const [album, setAlbum] = useState({});
    const [songs, setSongs] = useState([]);

    const albumId = showSection.payload;

    useEffect(() => {
        axios.get(`https://api.deezer.com/album/${albumId}`)
        .then(res=>{
            setAlbum(res.data);
           
            setSongs(res.data.tracks.data);
        })
    }, [albumId]);

    

    return (
        <div>
            <h1>{album.title}</h1>
            {
                songs.length > 0 &&
                songs.map(song=> <Song key={song.id} song={song}/>)
            }
        </div>
    )
}
