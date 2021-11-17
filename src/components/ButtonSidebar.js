import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AppContext } from "../App";

export default function ButtonSidebar(props) {

    const { dispatchSidebarButton, setViewContent } = useContext(AppContext);

    const { button } = props;

    const handleSidebarButton = (button) => {
        dispatchSidebarButton(button);
        setViewContent(button.text);
    }

    const sideGreen =  button.clicked ? 'side-green' : '';

    return (
        <div className={`sidebar-item hover ${sideGreen}`} onClick={() => handleSidebarButton(button)}>
            <FontAwesomeIcon icon={button.logo} size="2x"/>
            <span>{button.text}</span>
        </div>
    );
}