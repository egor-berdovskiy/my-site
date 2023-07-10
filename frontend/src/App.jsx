import React from 'react';

// Styles
import './css/main.css';

// Components
import Header from './components/Header';
import Welcome from './components/Welcome';
import Works from './components/Works';
import Contacts from './components/Contacts';


class App extends React.Component {
  render() {
    return(
      <>
        <Header />
        <Welcome telegram='kap1bar1k' />
        <Works>

        </Works>
        <Contacts />
      </>
    )
  };
};

export default App;
