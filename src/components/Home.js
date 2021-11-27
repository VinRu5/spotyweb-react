import React, { useContext } from "react";
import { AppContext } from "../App";

import TopPage from "./TopPage";
import ViewAlbum from "./ViewAlbum";
import ViewSection from "./ViewSection";

export default function Home() {

    const { showSection } = useContext(AppContext);

    const viewSection = ()=> {
        switch(showSection.view) {
            case 'section':
                return <ViewSection/>
            case 'album':
                return <ViewAlbum/>
        }
    }

    return (
        <div className="main-page">

            <TopPage/>
            {
                viewSection()
            }
        </div>
    );
}