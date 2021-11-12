import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './App.scss';
import Footer from './components/Footer';
import Main from './components/Main';

library.add(faPlusSquare)

function App() {
  return (
    <div className="container-fluid app">
      <Main />
      <Footer />
    </div>
  );
}

export default App;
