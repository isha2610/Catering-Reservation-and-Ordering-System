import {React, useState, useEffect} from 'react'
import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";
import { fs } from '../Config/firebase';
import { Products } from './Products';


const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async() =>{
    const products = await fs.collection('Products').get();
    const productsArray = [];

    for(var snap of products.docs){
      var data = snap.data();
      data.ID = snap.id;
      productsArray.push({
          ...data
      })
      if(productsArray.length === products.docs.length){
          setProducts(productsArray);
      }   
    }
  }

  useEffect(()=>{getProducts();},[])

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>View Products - USER</h1>
        {products.length > 0 && (
                <div className='container-fluid'>
                    <h1 className='text-center'>Products</h1>
                    <div className='products-box'>
                        <Products products={products}/>
                    </div>
                </div>
            )}
            {products.length < 1 && (
                <div className='container-fluid'>Please wait....</div>
            )}
    </div>
  )
}

export default ViewProducts
