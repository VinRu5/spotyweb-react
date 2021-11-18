import React from 'react'

export default function Playlist(props) {

    const { playlist } = props;

    return (
        <div>
            {playlist.name}
        </div>
    )
}
