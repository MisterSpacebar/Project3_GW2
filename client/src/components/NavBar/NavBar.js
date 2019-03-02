import React from "react";
//import API from "../../utils/API/";
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

//put it into new  copyArray.[...]
//choose the item in the seach by id
//map copyArray with Item element inside of the carousel 
// change state for name, price Sell, price Buy

//optional include little Grapgh with loaded history inside of Item component

//each element has id
//onClick(id) pass history to graph
//graph will create an array of selected id, which also should be removed