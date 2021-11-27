import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from "../App";

export default function Album(props) {

    const { album } = props;

    const { dispatchShowSection, dispatchSidebarButton } = useContext(AppContext);

    const handleNewView = (id) => {
        dispatchShowSection({ view: 'album', payload: id })
        dispatchSidebarButton({id: 0})
    }

    return(
        <div className="album col-xs-6 col-md-3 col-lg-2">
            
            <div 
                className="album-img"
                onClick={()=> handleNewView(album.id)}
            >
                <img src={album.cover} alt={`cover di ${album.title}`}/>
                <div className ="opacity center">
                <FontAwesomeIcon icon={['fas', 'play-circle']} size="2x" />
                </div>
            </div>
            
            <div className="album-title">{album.title}</div>
            <div className="album-subtitle">{album.artist.name}</div>
        </div>
    );
}