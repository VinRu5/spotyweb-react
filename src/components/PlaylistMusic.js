import React from "react";

export default function PlaylistMusic(props) {

    const { song } = props;

    

    return(
        <div className="album col-xs-6 col-md-3 col-lg-2">
            <div className="album-img">
                <img src={song.picture} alt="metal"/>
                <div className ="opacity center">
                <i className ="far fa-play-circle absolute-center"></i>
                </div>
            </div>
            <div className="album-title">{song.title}</div>
            <div className="album-subtitle">{song.user.name}</div>
        </div>
    );
}