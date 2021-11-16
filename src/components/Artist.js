import React from "react";

export default function Artist(props) {

    const { artist } = props;



    return (

        <div className="album col-6 col-md-3 col-lg-2">
            <div className="album-img radius">
                <img src={artist.picture} alt={`foto di ${artist.name}`} />
                <div className="opacity center">
                    <i className="far fa-play-circle absolute-center"></i>
                </div>
            </div>
            <div className="album-title">{artist.name}</div>
        </div>
    );
}