import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
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
        <Navbar state={props.store.getState().friendsBar} />
        {/*<Profile />*/}
        <div className="app-wrapper-content" >
          <Route path="/profile" render={ () => <Profile store={props.store} />} />
          <Route path="/dialogs" render={ () =>  <DialogsContainer store={props.store} />} />
          <Route path="/music" render={ () => <Music  />} />
          <Route path="/news" render={ () => <News />} />
          <Route path="/setting" render={ () => <Settings />} />
        </div>
      </div>
  );
}

export default App;
