import React, { useState, useReducer, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './App.scss';
import Footer from './components/Footer';
import Main from './components/Main';
import axios from 'axios';

library.add(faPlusSquare);

// const handleHomeSongList = (state, action) => {

//   console.log('action', action)

//   if (state.length = 0) {

//     return action;
//   }
//   return state;
// }

export const AppContext = React.createContext();

function App() {

  const [songsList, setSongsList] = useState([])
  const [albumsList, setAlbumsList] = useState([])
  const [artistsList, setArtistsList] = useState([])
  //const [homeSongList, dispatchHomeSongList] = useReducer(handleHomeSongList, {});

  // useEffect(() => {
  //   console.log('effect')
  //   axios.get('https://api.deezer.com/chart')
  //     .then(res => {
  //       console.log('fetch', res.data)
  //       dispatchHomeSongList(res.data.albums.data);
  //     }).catch(
  //       console.log('error')
  //     );

  // }, [])

  useEffect(() => {
    console.log('effect')
    axios.get('https://api.deezer.com/chart')
      .then(res => {
        console.log('fetch', res.data)
        setSongsList(res.data.playlists.data);
        setAlbumsList(res.data.albums.data);
        setArtistsList(res.data.artists.data);
      }).catch(
        console.log('error')
      );

  }, [])

  console.log('ciao')
  return (

    <AppContext.Provider
      value={
        {
          songsList: songsList,
          albumsList: albumsList,
          artistsList: artistsList,
        }
      }
    >
      <div className="container-fluid app">
        <Main />
        <Footer />
      </div>
    </AppContext.Provider>

  );
}

export default App;
