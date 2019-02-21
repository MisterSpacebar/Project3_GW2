import React from "react";
import {Navbar, NavItem} from 'react-materialize';
// import Login from '../Login/Login';
// import SignUp from '../SignUp/SignUp'

class navBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term : ''};
  }

  render () {
    return (
      <Navbar brand='logo' right>
      {/* <Input style={{backgroundColor:'#FFFFFF',height:'62px'}} type='text' label="search" value={this.state.term} onChange={event => this.setState({term : event.target.value}) }/> */}
      <NavItem style={{marginLeft:'25px'}} href='/' left>Home</NavItem>
      {/* <NavItem onClick={() => console.log('test click')}>Sign Up</NavItem> */}
      <NavItem href='/signUp'left>Sign Up</NavItem>
      <NavItem href='/login'left>Login</NavItem>
      <NavItem href='/about'left>About</NavItem>
      </Navbar> 
      
      )
  }
}

export default navBar;
