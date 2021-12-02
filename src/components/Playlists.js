import React, { useContext } from "react";

import { AppContext } from "../App";


export default function Playlists (props) {

    const { playlists } = useContext(AppContext);

    const { handlePlaylist } = props;

    return (
        <ul>
            {
                playlists.map((playlist, index)=>
                    <li key={index} onClick={()=> handlePlaylist(index)}>{playlist.name}</li>
                )
            }
            
            
        </ul>
    );
}