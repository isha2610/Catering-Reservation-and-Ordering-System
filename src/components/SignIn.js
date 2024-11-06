import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Alert from "react-bootstrap/Alert";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { doc, getDoc } from "firebase/firestore";
import { auth } from "../Config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";

const SignIn = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [position, setPosition] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const[errorMsg, setErrorMsg] = useState("");

  const [show, setShow] = useState(true);


  const handleSignIn = async (e) =>{
    e.preventDefault();
    // console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
      setSuccessMsg('Sign in Successful! You are being redirected to the Home Page.');
      setEmail('');
      setPassword('');
      setErrorMsg('');
      setTimeout(()=>{
        setSuccessMsg('');
        navigate('/');

      }, 3000);
    }).catch((error)=>{setErrorMsg(error.message)});

  }

  return (
    <div className='container'>
        <h1 style={{textAlign: 'center', paddingTop: '40px'}}>Sign In</h1><hr/><br/>
        {
          successMsg && <><Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Successful Sign In! You are being redirected to the Home page!</Alert.Heading>
        </Alert></>
        }
      <Form style={{paddingTop: '20px'}} autoComplete='off' onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" value={email} placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicRadio">
        <Form.Check type="radio" label="admin" value={position} />
        <Form.Check type="radio" label="user" value={position}/>
      </Form.Group> */}
      <button variant="primary" type="submit">
        Submit
      </button>
    </Form>
    <div>
      <span><br/>Don't have an account? Sign Up <Link to='/signup'>Here</Link>.</span>
    </div>
    {
          errorMsg && <><Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Can't Sign You In! Try Again. You have the following error: <br/> {errorMsg}</Alert.Heading>
        </Alert></>
        }
    </div>
  )
}

export default SignIn
