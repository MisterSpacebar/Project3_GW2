import React from "react";
import {Navbar, NavItem} from 'react-materialize';
import Search from './Search/Search';

const navBar = (props) => (
<Navbar brand='logo'>
    <Search
    typeText='id number'
    typeButton='submit'
    nameInput='search'
    nameButton='submit'
    value={props.value}
    onSubmit={props.onSubmit}
    onChange={props.onChange}
    />
  <NavItem href='/' >Home</NavItem>
  <NavItem href='/user'>User</NavItem>
  <NavItem href='/about'>About</NavItem>
</Navbar> 

);
export default navBar;