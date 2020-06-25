import React, { useEffect } from 'react';
import './App.css';
import firebase from './fbaseConfig'
import { StyledFirebaseAuth } from 'react-firebaseui'
import { Link } from 'react-router-dom';
import Routes from './Routes';
import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from './redux/actions'

function App() {

  const dispatch = useDispatch()
  // Login mechanism for the app using firebase google authentication

  const loggedIN = useSelector(state => state.loggedIN)  //fetching status for login/logout from redux state

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  }
  // Loggin in 
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        dispatch(logIn())
      }
      console.log("user", user)
      console.log('current user', firebase.auth().currentUser)
    })
  }, [])

  // LogOut function
  const logOutHandler = () => {
    dispatch(logOut())
    firebase.auth().signOut()
  }

  const favourites= useSelector(state=>state.favourites)

  return (
    <div>
      {(loggedIN ?
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <Link to="/"><div className='h3 text-bold text-white'>Home</div></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto mr-5">
                <li className="nav-item active mx-4 my-2">
                  <Link className='text-white' to="/">Dashboard</Link>
                </li>
                <li className="nav-item mx-4 my-2">
                  <Link className='text-white' to="/favourites">Favourites ({favourites.length})</Link>
                </li>
                <li className="nav-item mx-4">
                  <button className='btn btn-outline-light' onClick={logOutHandler}>LOGOUT</button>
                </li>
              </ul>
            </div>
          </nav>

          <Routes />
        </div> 
        :
        <div>
          <div className='m-5 text-center text-danger h1'>Please Login First</div>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      )}
    </div>
  )
}

export default App
