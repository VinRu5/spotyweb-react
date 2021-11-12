import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Playlists () {
    return (
        <ul>
            <li>
                <FontAwesomeIcon icon={['fas', 'plus-square']} size="2x"/>
                Crea Playlist
            </li>
            <li>Nome Playlist</li>
            <li>Nome Playlist</li>
            <li>Nome Playlist</li>
            <li>Nome Playlist</li>
            <li>Nome Playlist</li>
            <li>Nome Playlist</li>
        </ul>
    );
}