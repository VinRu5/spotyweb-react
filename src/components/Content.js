import React, { useContext } from "react";
import { AppContext } from "../App";
import Home from "./Home";
import Library from "./Library";
import NewPlaylist from "./NewPlaylist";
import SearchPage from "./SearchPage";
import Topbar from "./Topbar";



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
        }
    }

    console.log('view',viewPage());

    return (
        <div className="content col">

            <Topbar/>
            {viewPage()}

        </div>
    );
}