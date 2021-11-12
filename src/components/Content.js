import React from "react";
import Page from "./Page";
import Topbar from "./Topbar";

export default function Content() {
    return (
        <div class="content col">

            <Topbar/>
            <Page/>

        </div>
    );
}