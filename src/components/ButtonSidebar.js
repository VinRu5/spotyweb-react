import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AppContext } from "../App";

export default function ButtonSidebar(props) {

    const { dispatchSidebarButton } = useContext(AppContext);

    const { button } = props;


    const sideGreen =  button.clicked ? 'side-green' : '';

    return (
        <div className={`sidebar-item hover ${sideGreen}`} onClick={() => dispatchSidebarButton(button)}>
            <FontAwesomeIcon icon={button.logo} size="2x"/>
            <span>{button.text}</span>
        </div>
    );
}