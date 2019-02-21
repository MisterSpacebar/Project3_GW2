import React from "react";
import {Navbar, NavItem, Input} from 'react-materialize';

class navBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term : ''};
  }

  render () {
    return (
      <Navbar brand='logo' right>
        {/* <Autocomplete
          className='red lighten-5 black-text'
          title='Example'
          data={
            {
              'Apple': null,
              'Microsoft': null,
              'Google': 'http://placehold.it/250x250'
            }
          }
        /> */}
      <Input value={this.state.term} onChange = {event => this.setState({term : event.target.value}) }/>
      <NavItem href='/' left>Home</NavItem>
      <NavItem href='/user'left>User</NavItem>
      <NavItem href='/about'left>About</NavItem>
      </Navbar> 
      
      )
  }
}

export default navBar;
