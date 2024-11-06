import {React, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../Config/firebase';
// SIGN IN CHECK AND NAME OF THE USER CAN BE SHOWN HERE!


const Nav = ({user}) => {
    // let signedIn = true;
    const navigate = useNavigate();

    console.log(user);

    function handleSignOut() {
        signOut(auth).then(()=>navigate('/signin'));
    }

  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Catering Reservation & Ordering System</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                {/* {(!user && <> */}
                    <Link to="/signup" style={{all: 'unset', cursor:'pointer'}}>Sign Up &nbsp; </Link>
                    <Link to="/signin" style={{all: 'unset', cursor:'pointer'}}>Sign In</Link>
                {/* </> */}
                {/* )} */}
                {/* {(user && 
                    <>
                    <Link to="/" style={{all: 'unset', cursor:'pointer'}}>{user} &nbsp; </Link>
                    <Link to="/cart" style={{all: 'unset', cursor:'pointer'}}>Cart &nbsp; </Link>
                    <Link onClick={handleSignOut} style={{all: 'unset', cursor:'pointer'}}>Sign Out</Link>
                    </>
                )} */}
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Nav