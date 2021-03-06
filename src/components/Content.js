import React, { useContext } from "react";
import { AppContext } from "../App";
import Home from "./Home";
import Library from "./Library";
import NewPlaylist from "./NewPlaylist";
import SearchPage from "./SearchPage";
import Topbar from "./Topbar";
import ViewAlbum from "./ViewAlbum";
import ViewArtist from "./ViewArtist";



export default function Content() {

    const { viewContent } = useContext(AppContext);

    const viewPage = ()=> {
        switch(viewContent.toLowerCase()){
            case 'home':
                return <Home/>
            case 'cerca':
                return <SearchPage/>
            case 'la tua libreria':
                return <Library/>
            case 'crea playlist':
                return <NewPlaylist/>
            case 'album':
                return <ViewAlbum/>
            case 'artist':
                return <ViewArtist/>
    
        }
    }

    return (
        <div className="content col">

            <Topbar/>
            {viewPage()}

        </div>
    );
}