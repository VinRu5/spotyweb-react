import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Playlist(props) {

    const { playlist } = props;


    return (
        <div className="playlist-card col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="row align-items-center">
                <div className="playlist-card-title col-10">{playlist.name}</div>
                <div className="playlist-card-arrow col-2">
                    {playlist.visibleList ? 
                        <FontAwesomeIcon icon={['fas', 'chevron-circle-down']} size="2x" /> : 
                        <FontAwesomeIcon icon={['fas', 'chevron-circle-right']} size="2x" />
                    }
                </div>
            </div>

            <div className="row">
               {
                   //TODO=> inserire le canzoni della playlist
               }
            </div>

        </div>
    )
}
