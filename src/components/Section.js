import React from "react";
import Album from "./Album";

export default function Section() {
    return (
        <section>

            <div class="title-section">Recently played</div>


            <div class="row">
                <Album/>
            </div>
        </section>
    );
}