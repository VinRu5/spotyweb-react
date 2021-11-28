import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import Song from './Song';

export default function ViewAlbum() {

    const { contentSection } = useContext(AppContext);

    const [album, setAlbum] = useState({});
    const [albumID, setAlbumID] = useState(null);
    const [songs, setSongs] = useState([]);

    if(contentSection.type === 'album') {
        setAlbumID(contentSection.payload);
    }

    useEffect(() => {
        
        axios.get(`https://api.deezer.com/album/${albumID}`)
        .then(res=>{
            setAlbum(res.data);
           
            setSongs(res.data.tracks.data);
        })
    }, [albumID]);

    

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
