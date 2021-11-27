import React from 'react'
import Playlists from './Playlists'

export default function Menu(props) {

    const { handleCloseShow } = props;

    return (
        <ul className="menu">
            
            <li>
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

