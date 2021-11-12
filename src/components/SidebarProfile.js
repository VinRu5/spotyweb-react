import React from "react";

export default function SidebarProfile() {
    return (
        <div class="sidebar-profile">
            <div class="install hover">
                <img src="./img/download.svg" alt="download" />
                <span>Installa app</span>
            </div>
            <div class="profile">
                <div class="profile-img">
                    <img src="./img/profile.svg" alt="" />

                </div>
                <span>Vincenzo Russo</span>
            </div>
        </div>
    );
}