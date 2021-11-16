import React from "react";
import Section from "./Section";
import TopPage from "./TopPage";

export default function Page() {
    return (
        <div class="main-page">
            <TopPage/>
            <Section sectionName="album"/>

            <Section sectionName="playlist"/>
                
            <Section sectionName="artist"/>
        </div>
    );
}