import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
      <div className="app-wrapper" >
        <Header />
        <NavbarContainer  />
        {/*<Profile />*/}
        <div className="app-wrapper-content" >
          <Route path="/profile" render={ () => <Profile  />} />
          <Route path="/dialogs" render={ () =>  <DialogsContainer />} />
          <Route path="/music" render={ () => <Music  />} />
          <Route path="/news" render={ () => <News />} />
          <Route path="/setting" render={ () => <Settings />} />
        </div>
      </div>
  );
}

export default App;
