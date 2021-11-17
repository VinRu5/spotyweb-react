import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Song from "./Song";


export default function SearchPage() {

    const [searchText, setSearchText] = useState('');
    const [textBySend, setTextBySend] = useState('');
    const [searchList, setSearchList] = useState([]);

    const handleSearchText = (e) => {
        setSearchText(e);
    }

    const handleSearch = ()=> {
        setTextBySend(searchText);
    }

    useEffect(() => {

        axios.get(`https://api.deezer.com/search?q=${textBySend}`)
        .then(res=> {
            setSearchList(res.data.data);

        })
        .catch(error=>{
            setSearchList([])
        })
 
    }, [textBySend])


    const viewSearched = () => {

        if(typeof searchList === 'undefined' || searchList.length === 0) {
            return <div className="text-search">Inizia la Ricerca</div>
        } else {
            return searchList.map(song=><Song key={song.id} song={song}/>)
        }
    }

    return (
        <div className="main-page">
            <div className="row">
                <input type="text" value={searchText} onChange={(e)=>handleSearchText(e.target.value)} />
                <button className="btn" onClick={()=>handleSearch()} >
                    <FontAwesomeIcon icon={['fas', 'search']}/>
                </button>
            </div>
            <div className="row">
                {viewSearched()}
            </div>
        </div>
    );
}