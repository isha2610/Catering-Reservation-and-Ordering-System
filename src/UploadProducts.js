import {React, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UploadProducts = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [position, setPosition] = useState("");

  return (
    <div>
      <div className='container'>
        <h1 style={{textAlign: 'center'}}>Upload Products - ADMIN</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name of the Product</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default UploadProducts
