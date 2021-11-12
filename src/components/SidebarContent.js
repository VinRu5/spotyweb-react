import React from "react";
import HomeButton from "./HomeButton";
import LibraryButton from "./LibraryButton";
import Logo from "./Logo";
import Playlists from "./Playlists";
import SearchButton from "./SearchButton";

export default function SidebarContent() {
    return (
        <div className="sidebar-content">

            <Logo/>
            
            <HomeButton/>
            
            <SearchButton/>
            <LibraryButton/>
            <div class ="playlist">PLAYLIST</div>
            <Playlists/>
        </div>
    );
}