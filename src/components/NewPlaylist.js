import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React , { useState, useContext } from "react";
import { AppContext } from "../App";


export default function NewPlaylist() {

    
    const [ playlistName, setPlaylistName ] = useState('');

    const { playlists, dispatchPlaylists } = useContext(AppContext);
    
    const handlePlaylistName = (e) => {
        setPlaylistName(e);
    }

    return (
        <div className="main-page">
            <div className="add-playlist">
                <input type="text" value={playlistName} onChange={(e)=>handlePlaylistName(e.target.value)} placeholder="Inserisci il nome della Playlist"/>
                <button className="btn">
                    <FontAwesomeIcon icon={['fas', 'plus-square']} size="3x" />
                </button>
            </div>
            <div>

            </div>
        </div>
    );
}