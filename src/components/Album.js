import React from "react";

export default function Album() {
    return(
        <div class="album col-xs-6 col-md-3 col-lg-2">
            <div class="album-img">
                <img src="./img/metal_lifting.jpg" alt="metal"/>
                <div class ="opacity center">
                <i class ="far fa-play-circle absolute-center"></i>
                </div>
            </div>
            <div class="album-title">Heavy Metal</div>
            <div class="album-subtitle">Subtitle</div>
        </div>
    );
}