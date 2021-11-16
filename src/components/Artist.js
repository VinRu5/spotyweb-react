import React from "react";

export default function Artist(props) {

    const { artist } = props;



    return (

        <div class="album col-6 col-md-3 col-lg-2">
            <div class="album-img radius">
                <img src={artist.picture} alt="mix" />
                <div class="opacity center">
                    <i class="far fa-play-circle absolute-center"></i>
                </div>
            </div>
            <div class="album-title">{artist.name}</div>
        </div>
    );
}