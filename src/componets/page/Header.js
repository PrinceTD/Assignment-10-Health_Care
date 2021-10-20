import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import {
  Link
} from "react-router-dom"
import './Header.css'
import useAuth from '../../hooks/useAuth'
import logo from '../../img/medical-logo-removebg-preview.png'
import { HashLink } from 'react-router-hash-link';




const Header = () => {
  const { user, logOut } = useAuth()
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand to="/home">
            <img src={logo} alt="" height='50px' />
            <span>
            <strong className='text-danger'>HEALTH</strong>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/home" className='nav-item'>Home</Link>
              <Link as={HashLink} to="/about" className='nav-item'>About us</Link>
              <HashLink to="/home#doctor" className='nav-item'>Doctor</HashLink>
              <Link as={HashLink} to="/contact" className='nav-item'>Contact us</Link>

              {user?.displayName ?
                <Button onClick={logOut} variant="dark" className='nav-item text-light'>logOut</Button> :
                <Link to="/login" className='nav-item'>LogIn</Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;