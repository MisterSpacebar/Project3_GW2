import React from "react";
import {Navbar, NavItem, Autocomplete} from 'react-materialize';

const navBar = () => (
<Navbar brand='logo' right>
  <Autocomplete
    className='red lighten-5 black-text'
    title='Example'
    data={
      {
        'Apple': null,
        'Microsoft': null,
        'Google': 'http://placehold.it/250x250'
      }
    }
  />
<NavItem href='/' left>Home</NavItem>
<NavItem href='/user'left>User</NavItem>
<NavItem href='/about'left>About</NavItem>
</Navbar> 

);


export default navBar;
