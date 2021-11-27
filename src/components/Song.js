import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Menu from "./Menu";

export default function Song(props) {

    const { song } = props;

    const [showNow, setShowNow] = useState(false);

    const viewMenu = () => {
        if (showNow) {
            return <Menu handleCloseShow={()=>handleCloseShow()}/>
        }
    }

    const handleShow = () => {
        setShowNow(true);
    }

    const handleCloseShow = ()=> {
        setShowNow(false);
    }

    return(
        <div className="album col-xs-6 col-md-3 col-lg-2">

            {
                viewMenu()
            }
            <div className="album-img" onClick={() => handleShow()}>
                <img src={song.album.cover} alt={`cover di ${song.title}`}/>          
            </div>
            <div className="album-title">{song.title}</div>
            <div className="album-subtitle">{song.artist.name}</div>
        </div>
    );
}