import React from "react";
import Content from "./Content";

import Sidebar from "./Sidebar";

export default function Main () {
    return (
        <main className="row">
            <Sidebar/>
            <Content/>
        </main>
    );
}