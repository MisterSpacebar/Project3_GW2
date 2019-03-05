import React from "react";
//import API from "../../utils/API/";
import {Navbar, NavItem} from 'react-materialize';
import Search from './Search/Search';

const navBar = (props) => (
<Navbar brand='logo' right>
    <Search
    // className='red lighten-5 black-text'
    typeText='text'
    typeButton='submit'
    nameInput='search'
    nameButton='submit'
    value={props.value}
    onSubmit={props.onSubmit}
    onChange={props.onChange}
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