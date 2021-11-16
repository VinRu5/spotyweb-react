import React, { useState, useReducer, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faPlayCircle, faHome, faSearch, faGripVertical } from '@fortawesome/free-solid-svg-icons'
import './App.scss';
import Footer from './components/Footer';
import Main from './components/Main';
import axios from 'axios';

library.add(faPlusSquare, faPlayCircle, faHome, faSearch, faGripVertical);

const initialButtonSidebar = [
  {
    id: 1,
    text: 'home',
    logo: ['fas', 'home'],
    clicked: true,
  },
  {
    id: 2,
    text: 'cerca',
    logo: ['fas', 'search'],
    clicked: false,
  },
  {
    id: 3,
    text: 'la tua libreria',
    logo: ['fas', 'grip-vertical'],
    clicked: false,
  }
];

const handleSidebarButton = (state, action)=> {
  const indexClick = state.findIndex(item=>item.id === action.id);
  let newState = state.map(button=> {
    return {
      ...button,
      clicked: false,
    }
  })

  newState.splice(indexClick, 1, {...action, clicked: true});

  return newState;
}

export const AppContext = React.createContext();

function App() {

  const [songsList, setSongsList] = useState([]);
  const [albumsList, setAlbumsList] = useState([]);
  const [artistsList, setArtistsList] = useState([]);
  const [viewContent, setViewContent] = useState('home'); //=> da sistemare per visualizzazionecontenuto pagina
  const [sidebarButton, dispatchSidebarButton] = useReducer(handleSidebarButton, initialButtonSidebar);

  useEffect(() => {

    axios.get('https://api.deezer.com/chart')
      .then(res => {

        setSongsList(res.data.playlists.data);
        setAlbumsList(res.data.albums.data);
        setArtistsList(res.data.artists.data);
      }).catch(
        console.log('error')
      );

  }, [])

  return (

    <AppContext.Provider
      value={
        {
          songsList: songsList,
          albumsList: albumsList,
          artistsList: artistsList,
          sidebarButton: sidebarButton,
          dispatchSidebarButton: dispatchSidebarButton,
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
