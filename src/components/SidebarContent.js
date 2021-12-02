import React, { useContext } from "react";
import { AppContext } from "../App";
import ButtonSidebar from "./ButtonSidebar";
import Logo from "./Logo";
import Playlists from "./Playlists";

export default function SidebarContent() {

    const { sidebarButton } = useContext(AppContext);

const handlePlaylist = ()=> {console.log('side')}
    return (
        <div className="sidebar-content">

            <Logo/>

            {
                sidebarButton.map(button=> <ButtonSidebar key={button.id} button={button} />)
            }

            <div className ="playlist">PLAYLIST</div>
            <Playlists handlePlaylist={()=> handlePlaylist()}/>
        </div>
    );
}