import {React, useState} from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { auth, fs } from "../Config/firebase";
import { useNavigate } from "react-router-dom";
import { doc, addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth';
// SIGN UP FOR DIFFERENT ROLES DIFFERENTLY

const SignUp = () => {

    const navigate = useNavigate();

    const[name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [position, setPosition] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const[errorMsg, setErrorMsg] = useState("");
    const [show, setShow] = useState(true);

    const handleSignUp = async (e) => {
      e.preventDefault();
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // .then(async ()=>{
      // })
      // .catch((error)=>{setErrorMsg(error.message)})

      await addDoc(collection(fs, 'Users'), {
        'FullName': name,
        'Email': email,
        'Password': password,
        'Position': position
    })
    .then(()=>setSuccessMsg('Sign Up Successful. You are being redirected to Login Page!'),
        setName(''),
        setEmail(''),
        setPassword(''),
        setErrorMsg(''),
        setTimeout(()=>{
          setSuccessMsg('');
          navigate('/signin');
        }, 9000)
    )
    .catch((error)=>{setErrorMsg(error.message)});
      
    }

  return (
    <div className='container'>
        <h1 style={{textAlign: 'center' , paddingTop: '40px'}}>Sign Up</h1><hr/>
        {
          successMsg && <><Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Successful Sign In! You are being redirected to the login page!</Alert.Heading>
        </Alert></>
        }
      <Form style={{paddingTop: '20px'}} autoComplete='off' onSubmit={handleSignUp}>
      <Form.Group className="mb-3" id="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name here" value={name} onChange={(e) => setName(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" id="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" id="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRadio" required>
        <Form.Check type="radio" label="admin" value="admin" onChange={(e) => setPosition(e.target.value)}/>
        <Form.Check type="radio" label="user" value="user" onChange={(e) => setPosition(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <div>
      <span><br/>Already have an account? Login <Link to='/signin'>Here</Link>.</span>
    </div>
    {
          errorMsg && <><Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Can't Sign You Up! Try Again. You have the following error: <br/> {errorMsg}</Alert.Heading>
        </Alert></>
        }
    </div>
  )
}

export default SignUp
