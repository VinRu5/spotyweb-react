import React from 'react'
import Playlists from './Playlists'

export default function Menu() {
    return (
        <div className="menu">
            <div>
                Ascolta brano
            </div>
            <div>
                Aggiungi a Playlist
            </div>
            <Playlists/>
        </div>
    )
}

