import {React, useState} from 'react'
import Form from 'react-bootstrap/Form';
import Alert from "react-bootstrap/Alert";
import { fs, storage } from "../Config/firebase";

const UploadProducts = () => {

    const [Itemname, setItemName] = useState('');
    const [Itemprice, setItemPrice] = useState('');
    const [Itemimage, setItemImage] = useState(null);
    const [show, setShow] = useState(true);

    const[successMsg, setSuccessMsg] = useState('');
    const[errorMsg, setErrorMsg] = useState('');
    const[imageError, setImageError] = useState(''); // when file type is not image

    const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG']
    
    const handleItemImage = (e) => {
      let selectedFile = e.target.files[0];
      if(selectedFile){
        if(selectedFile && types.includes(selectedFile.type)){
          setItemImage(selectedFile);
          setImageError('');
        }
        else{
          setImageError('Unsupported File Type.');
          setItemImage(null);
        }
      }
      else{
        console.log("please select your file");
      }
    }

    const HandleUploadProducts = (e) => {
      e.preventDefault();
      
      // console.log(Itemname, Itemprice);
      // console.log(Itemimage);

      const uploadTask=storage.ref(`product-images/${Itemimage.name}`).put(Itemimage);

      uploadTask.on('state_changed', snapshot=>{
          const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
          console.log(progress);
      }, error=>setErrorMsg(error.message),()=>{
          storage.ref('product-images').child(Itemimage.name).getDownloadURL().then(url=>{
              fs.collection('Products').add({
                  Itemname,
                  Itemprice: Number(Itemprice),
                  url
              }).then(()=>{
                  setSuccessMsg('Product added successfully');
                  setItemName('');
                  setItemPrice('');
                  document.getElementById('file').value='';
                  setImageError('');
                  setErrorMsg('');
                  setTimeout(()=>{
                    setSuccessMsg('');
                  },3000)
              }).catch(error=>setErrorMsg(error.message));
          })
      })
    }

  return (
    <div>
      <div className='container'>
        <h1 style={{textAlign: 'center', paddingTop: '40px', paddingBottom:'8px'}}>Upload Products - ADMIN</h1><hr/>
        <Form style={{paddingTop: '30px'}} onSubmit={HandleUploadProducts}>
          {
            successMsg && <><Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{successMsg}</Alert.Heading>
            </Alert></>
          }
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
            <Form.Control type="file" onChange={handleItemImage} required/>
          </Form.Group>
          {
              imageError && <><Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>{imageError}</Alert.Heading>
            </Alert></>
          }
          {
              errorMsg && <><Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading><br/>{errorMsg}</Alert.Heading>
            </Alert></>
          }
          <button variant="primary" type="submit">Submit</button>
        </Form>
      </div>
    </div>
  )
}

export default UploadProducts
