import React from 'react'
import './Home.css';
import Sidebar from './Sidebar';
function Home({currentUser,signOut}) {
  return (
    <div className='home'>
      <div className='home-container'>
        <Sidebar currentUser={currentUser} signOut={signOut}/>
        <div className='home-bg'>
          <img src="./WhatsAppbg.png" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Home;

