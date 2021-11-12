import React from "react";
import NavCenter from "./NavCenter";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

export default function Footer() {
    return (
        <footer>
            <NavLeft/>
            <NavCenter/>
            <NavRight/>
        </footer>
    );
}