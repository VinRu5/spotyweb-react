import React from 'react'
import Playlists from './Playlists'

export default function Menu(props) {

    const { handleCloseShow, handlePlayed, handleAddToPlaylist } = props;
    

    return (
        <ul className="menu">
            
            <li onClick={()=> handlePlayed()}>
                Ascolta brano
            </li>
            <li>
                Aggiungi a Playlist
            </li>
            <Playlists handlePlaylist={(index)=> handleAddToPlaylist(index)}/>
            <li onClick={()=> handleCloseShow()}>
                Chiudi
            </li>
        </ul>
    )
}

