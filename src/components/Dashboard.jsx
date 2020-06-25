import React from 'react'
import Cards from './Cards'
import SearchField from './SearchField'
import firebase from '../fbaseConfig'

export default function Dashboard() {
    return (
        <div>
            <div className='m-5 d-flex justify-content-center'>
              <div>
                  <img src={firebase.auth().currentUser.photoURL} alt='userImage' style={{height:'80px',width:'80px',borderRadius:'50%'}}/>
              </div>
              <div className='h5 mx-4 my-auto text-success'>Welcome {firebase.auth().currentUser.displayName}</div>  
            </div>
            <SearchField/>
            <Cards/>
        </div>
    )
}
