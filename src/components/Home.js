import React, { useContext } from "react";
import { AppContext } from "../App";
import Section from "./Section";
import TopPage from "./TopPage";

export default function Home() {

    return (
        <div className="main-page">

            <TopPage/>
            
            <Section sectionName="album" />

            <Section sectionName="playlist" />

            <Section sectionName="artist" />
        </div>
    );
}