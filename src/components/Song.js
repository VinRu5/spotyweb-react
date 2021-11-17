import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../img/logo.svg';

export default function Song(props) {

    const { song } = props;

    

    return(
        <div className="album col-xs-6 col-md-3 col-lg-2">
            <div className="album-img">
                <img src={logo} alt={`cover di ${song.title}`}/>
                <div className ="opacity center">
                <FontAwesomeIcon icon={['fas', 'play-circle']} size="2x" />
                </div>
            </div>
            <div className="album-title">{song.title}</div>
            <div className="album-subtitle">{song.artist.name}</div>
        </div>
    );
}