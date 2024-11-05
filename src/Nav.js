import {React, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
// SIGN IN CHECK AND NAME OF THE USER CAN BE SHOWN HERE!


const Nav = () => {
    // let signedIn = true;

    // const [username, setUsername] = useState("");

  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Catering Reservation & Ordering System</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                {/* if(signIn)?{
                    <Navbar.Text>
                    Signed in as: <a href="#login">{username}</a></Navbar.Text>
                }
                :{ */}
                    <div>
                    <Link to="/signup"><Button className='nav-btn' style={{all: 'unset'}}> Sign Up </Button> &nbsp; </Link>
                    <Link to="/signin"><Button className='nav-btn' style={{all: 'unset'}}> Sign In</Button> </Link>
                    </div>
                {/* } */}
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Nav
