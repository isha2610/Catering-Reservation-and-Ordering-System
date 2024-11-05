import {React, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UploadProducts = () => {

    const [Itemname, setItemName] = useState('');
    const [Itemprice, setItemPrice] = useState('');
    const [Itemimage, setItemImage] = useState(null);
    
    const[successMsg, setSuccessMsg] = useState('');
    const[errorMsg, setErrorMsg] = useState('');
    const[imageError, setImageError] = useState(''); // when file type is not image

  return (
    <div>
      <div className='container'>
        <h1 style={{textAlign: 'center'}}>Upload Products - ADMIN</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Item Name</Form.Label>
        <Form.Control type="text" placeholder="Item Name" onChange={(e) => setItemName(e.target.value)} value={Itemname} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Item Price</Form.Label>
        <Form.Control type="text" placeholder="$0.00" onChange={(e) => setItemPrice(e.target.value)} value={Itemprice} required />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Item Image</Form.Label>
        <Form.Control type="file" onChange={(e) => setItemImage(e.target.value)} value={Itemimage} required/>
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
