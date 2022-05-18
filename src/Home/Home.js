import React from 'react';
import Header from '../Header/Header';

import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Header />
      <div className='container'>
        <div className='small-container'>
          <div className='text' id="Nidhi">
            <p>Nidhi</p>
          </div>
          <div className='text bottom-line' id='Elango'>
            <p>Elango</p>
          </div>
        </div>
      </div>
      <div className='description'>
        <p>....</p>
      </div>
    </div>
  )
}

export default Home