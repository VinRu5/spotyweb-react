import React from "react";

export default function NavRight() {
    return (
        <nav class="side ">
            <div class="row around-center">
                <i class="fas fa-list-ul"></i>
                <i class="fas fa-desktop"></i>
                <i class="fas fa-volume-up"></i>
                <div class="bar col-xs-4">
                    <div class="row">
                        <div class="bar progress row">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}