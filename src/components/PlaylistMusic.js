import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PlaylistMusic(props) {

    const { song } = props;

    

    return(
        <div className="album col-xs-6 col-md-3 col-lg-2">
            <div className="album-img">
                <img src={song.picture} alt={`cover di ${song.title}`}/>
                <div className ="opacity center">
                <FontAwesomeIcon icon={['fas', 'play-circle']} size="2x" />
                </div>
            </div>
            <div className="album-title">{song.title}</div>
            <div className="album-subtitle">{song.user.name}</div>
        </div>
    );
}