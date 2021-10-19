import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import {
  Link
} from "react-router-dom"
import useAuth from '../../hooks/useAuth'



const Header = () => {
  const { user, logOut } = useAuth()
  return (
    <div>
      <Navbar bg="" expand="lg">
        <Container>
          <Navbar.Brand to="/home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/home">Home</Link>
              <Link to="/about">About us</Link>
              <Link to="/contact">Contact us</Link>
              {user?.email ?
                <Button onClick={logOut} variant="dark">logOut</Button> :
                <Link to="/login">LogIn</Link>}

            
              <Navbar.Text>
                sign in as: <a href="#login">{user?.displayName}</a>
              </Navbar.Text>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;