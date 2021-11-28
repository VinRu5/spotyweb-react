import React, {useContext} from "react";
import { AppContext } from "../App";

export default function Artist(props) {

    const { artist } = props;

    const { dispatchContentSection, dispatchSidebarButton, setViewContent } = useContext(AppContext);

    const handleViewArtist = (id)=> {
        dispatchContentSection({type: 'artist', payload: id});
        dispatchSidebarButton({id: 0});
        setViewContent('artist');
    }

    return (

        <div className="album col-6 col-md-3 col-lg-2" onClick={()=> handleViewArtist(artist.id)}>
            <div className="album-img radius">
                <img src={artist.picture} alt={`foto di ${artist.name}`} />
                <div className="opacity center">
                    <i className="far fa-play-circle absolute-center"></i>
                </div>
            </div>
            <div className="album-title">{artist.name}</div>
        </div>
    );
}