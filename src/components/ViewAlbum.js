import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import Song from './Song';

export default function ViewAlbum() {

    const { contentID } = useContext(AppContext);

    const [album, setAlbum] = useState({});
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        
        axios.get(`https://api.deezer.com/album/${contentID}`)
        .then(res=>{
            setAlbum(res.data);       
            setSongs(res.data.tracks.data);
        })
    }, []);

    

    return (
        <div>
            <h1>{album.title}</h1>
            {
                songs.length > 0 &&
                songs.map(song=> 
                    <Song 
                        key={song.id} 
                        song={song} 
                        albumCover={album.cover}
                    />
                )
            }
        </div>
    )
}
