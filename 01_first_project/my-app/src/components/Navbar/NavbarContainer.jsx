import React from 'react';
import Navbar from './Navbar';
import StoreContext from '../../StoreContext';


const NavbarContainer = () => {
  return (
    <StoreContext.Consumer> 
      { (store) => {
        return <Navbar friends={store.getState().friendsBar.friends} />
      }
    }
    </StoreContext.Consumer>
  );
}

export default NavbarContainer;