import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
    
      <div className="app-wrapper" >
        <Header />
        <Navbar state={props.state.friendsBar} />
        {/*<Profile />*/}
        <div className="app-wrapper-content" >
          <Route path="/profile" render={ () => <Profile state={props.state.profilePage} />} />
          <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsPage} />} />
          <Route path="/music" render={ () => <Music  />} />
          <Route path="/news" render={ () => <News />} />
          <Route path="/setting" render={ () => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
