import React from "react";

export default function NavCenter() {
    return (
        <nav class="player">

            <div class="player-top center">
                <i class="fas fa-random"></i>
                <i class="fas fa-step-backward"></i>
                <i id="play" class="far fa-play-circle play-buttonc"></i>
                <i class="fas fa-step-forward"></i>
                <i class="fas fa-redo-alt"></i>
            </div>
            <div class="player-bottom center">
                <div class="time-start">0:25</div>
                <div class="bar col-xs-7">
                    <div class="row">
                        <div class="bar progress row">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
                <div class="time-end">4:35</div>
            </div>

        </nav>
    );
}