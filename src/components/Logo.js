import React from "react";
import logo from "../img/logo.svg";
import logoSmall from "../img/logo-small.svg";

export default function Logo() {
    return (
        <div class="logo">
            <img src={logo} alt="logo" />
            <img src={logoSmall} alt="logo" />
        </div>
    );
}