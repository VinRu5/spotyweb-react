import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SidebarProfile() {
    return (
        <div className="sidebar-profile">
            <div className="install hover">
                <FontAwesomeIcon icon={['fas', 'long-arrow-alt-down']}/>
                <span>Installa app</span>
            </div>
            <div className="profile">
                <div className="profile-img">
                    <img src="./img/profile.svg" alt="" />

                </div>
                <span>Vincenzo Russo</span>
            </div>
        </div>
    );
}