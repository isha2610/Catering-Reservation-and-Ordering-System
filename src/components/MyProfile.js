import React from 'react'
import Nav from './Nav'

const MyProfile = () => {
  return (
    <div>
        <Nav/>
        <h1 style={{textAlign: 'center'}}>MY Profile - USER</h1>
        <h2>Name of the person</h2>
        <h2>Orders Placed by me</h2>
        <h2>Items in my Cart</h2>
    </div>
  )
}

export default MyProfile
