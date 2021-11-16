import React, { useContext } from "react";
import { AppContext } from "../App";
import Album from "./Album";
import Artist from "./Artist";
import PlaylistMusic from "./PlaylistMusic";

export default function Section(props) {

    const { songsList, albumsList, artistsList } = useContext(AppContext);
    const { sectionName } = props;

    let sectionList = [];
    let titleSection = '';

    switch (sectionName) {
        case 'album':
            sectionList = albumsList;
            titleSection = 'Gli album del momento';
            break
        case 'playlist':
            sectionList = songsList;
            titleSection = 'Playlist di successo';
            break
        case 'artist':
            sectionList = artistsList;
            titleSection = 'Artisti in voga';
            break
        default:
            break

    }


    return (
        <section>

            <div className="title-section">{ titleSection }</div>
            <div className="row">

                {
                    sectionList.map(track => {
                        switch (sectionName) {
                            case 'album':
                                return <Album key={track.id} album={track} />
                            case 'playlist':
                                return <PlaylistMusic key={track.id} song={track} />
                            case 'artist':
                                return <Artist key={track.id} artist={track} />
                            default:
                                return
                        }

                    })

                }

            </div>

        </section>
    );
}