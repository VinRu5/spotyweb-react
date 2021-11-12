import React from "react";

export default function NavLeft() {
    return (
        <nav class="side">
            <div class="row around-center">
                <div class="col-xs-3 artist-img">
                    <img src="./img/sinister.jpeg" alt="sinister"/>
                </div>
                <div class="col-xs-4">
                    <div class="artist-name">Sinister</div>
                    <div class="artist-track">Brano Nome</div>
                </div>
                <div class="col-xs-3">
                    <div class="preferences">
                        <i class="far fa-heart hover"></i>
                        <i class="far fa-folder hover"></i>
                    </div>
                </div>
            </div>
        </nav>
    );
}