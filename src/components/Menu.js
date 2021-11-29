import React from 'react'
import Playlists from './Playlists'

export default function Menu(props) {

    const { handleCloseShow, handlePlayed } = props;

    return (
        <ul className="menu">
            
            <li onClick={()=> handlePlayed()}>
                Ascolta brano
            </li>
            <li>
                Aggiungi a Playlist
            </li>
            <Playlists/>
            <li onClick={()=> handleCloseShow()}>
                Chiudi
            </li>
        </ul>
    )
}

