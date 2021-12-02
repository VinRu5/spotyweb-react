import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import logo from "../img/logo-small.svg";
import Menu from "./Menu";

export default function Song(props) {

    const { song, albumCover } = props;

    const { dispatchPlaySong, dispatchPlaylists } = useContext(AppContext);

    const [showNow, setShowNow] = useState(false);

    const viewMenu = () => {
        if (showNow) {
            return <Menu 
                handleCloseShow={() => handleCloseShow()} 
                handlePlayed={()=> handlePlayed()}
                handleAddToPlaylist={(index)=> handleAddToPlaylist(index)}
            />
        }
    }

    const handleShow = () => {
        setShowNow(true);
    }

    const handleCloseShow = () => {
        setShowNow(false);
    }

    const handleAddToPlaylist = (index)=> {
        dispatchPlaylists({type: 'songs', payload: song.id, playlist: index});
        handleCloseShow();
    }

    const handlePlayed = ()=> {
        dispatchPlaySong(
            {
                artist: song.artist.name,
                songTitle: song.title,
                cover: songCover(),
            }
        );
        handleCloseShow();
    }

    const songCover = () => {
        if (song.hasOwnProperty('album')) {
            return song.album.cover
        } else {
            return albumCover
        }
    }

    return (
        <div className="song col-12">
            <div className="row align-items-center">

                <div className="album-img col-2 col-sm-3 col-md-2 col-lg-1">
                    <img src={songCover()} alt={`cover di ${song.title}`} />
                </div>
                <div className="col">
                    <div className="album-title">{song.title}</div>
                    <div className="album-subtitle">{song.artist.name}</div>
                </div>
                <div className="col-2 col-md-2 col-lg-1 position-relative">
                    <FontAwesomeIcon icon={['fas', 'bars']} size="2x" onClick={() => handleShow()} />
                    {
                        viewMenu()
                    }
                </div>
            </div>
        </div>
    );
}