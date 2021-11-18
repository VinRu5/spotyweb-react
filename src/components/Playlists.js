import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from "../App";


export default function Playlists () {

    const { playlists } = useContext(AppContext)

    return (
        <ul>
            {
                playlists.map(playlist=>
                    <li>{playlist.name}</li>
                )
            }
            
            
        </ul>
    );
}