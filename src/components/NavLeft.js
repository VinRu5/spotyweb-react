import React, { useContext } from "react";
import { AppContext } from "../App";

export default function NavLeft() {

    const { playSong } = useContext(AppContext);

    return (
        <nav class="side">
            <div class="row around-center">
                <div class="col-3 artist-img">
                    <img src={ playSong.cover } alt="sinister"/>
                </div>
                <div class="col-4">
                    <div class="artist-name">{ playSong.artist }</div>
                    <div class="artist-track">{ playSong.songTitle }</div>
                </div>
                <div class="col-3">
                    <div class="preferences">
                        <i class="far fa-heart hover"></i>
                        <i class="far fa-folder hover"></i>
                    </div>
                </div>
            </div>
        </nav>
    );
}