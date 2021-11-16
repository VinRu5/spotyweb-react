import React from "react";

export default function Album(props) {

    const { album } = props;

    

    return(
        <div className="album col-xs-6 col-md-3 col-lg-2">
            <div className="album-img">
                <img src={album.cover} alt="metal"/>
                <div className ="opacity center">
                <i className ="far fa-play-circle absolute-center"></i>
                </div>
            </div>
            <div className="album-title">{album.title}</div>
            <div className="album-subtitle">{album.artist.name}</div>
        </div>
    );
}