import React from 'react';
import './ProfileScreen.css';
import { selectUser } from '../features/counter/userSlice'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'
import Nav from '../Nav';

function ProfileScreen( className="ProfileScreen") {
    const user = useSelector(selectUser)
    return (
        <div className="ProfileScreen">
            <Nav />
            <div className='profile_body'>
        <h1>Edit Profile</h1>
        <div className='profile_info'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='avatar'
          />
          <div className='profile_details'>
            <h2>{user.email}</h2>
            <div className='profile_plans'>
              <h3>Plans</h3>
              <p></p>
              <button
                onClick={() => auth.signOut()}
                className='profile_signout'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
            
        </div>
    )
}

export default ProfileScreen

