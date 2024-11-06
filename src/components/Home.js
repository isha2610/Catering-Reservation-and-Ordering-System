import React from 'react'
import Nav from './Nav'
import ViewProducts from './ViewProducts'
import { useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth,fs } from "../Config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import Slider from './img/imageSlider';

const Home = () => {

  // getting current user
  function GetCurrentUser() {
    const [user, setUser] = useState(null);

    useEffect(()=>{
      onAuthStateChanged(auth, async (CurrentUser)=>{
        if(CurrentUser){
          try{
            const userDocRef = doc(fs, 'users', CurrentUser.uid);
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
              // Set user data from Firestore
              setUser(userDoc.data());
            } 
            else {
              console.log("No user data found in Firestore.");
              setUser(null);
            }
          }
          catch(error){
            console.error("Error fetching user data:", error);
          }
        }
        else{
          setUser(null);
        }

      }).then();
        
    }, [])
  };
    


  let user = "Isha";

  return (
    <div>
      <Nav user={user}/>
      {/* <ViewProducts/> */}
      <Slider/>
    </div>
  )
}

export default Home
