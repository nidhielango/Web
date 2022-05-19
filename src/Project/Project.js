import React from 'react';
import Header from '../Header/Header';
import './Project.css';
import link from '../Assests/link.png';

function Project() {
  return (
    <div>
      <Header/>
      <div className='project'>
        <div className='projects'>
          <h1>Projects</h1>
        </div>
        <div className="project-container">
          <div className="project-items">
            <div className="item">
              <div className='project-number'>
                <p>1</p>
              </div>
              <a href="/">
                <div className='project-text'>
                  <p>Description...</p>
                  <img src={link} alt="" />
                </div>
              </a>
            </div>
            <div className="item">
              <div className='project-number'>
                <p>2</p>
              </div>
              <a href="/">
                <div className='project-text'>
                  <p>Description...</p>
                  <img src={link} alt="" />
                </div>
              </a>
            </div>
            <div className="item">
              <div className='project-number'>
                <p>1</p>
              </div>
              <a href="/">
                <div className='project-text'>
                  <p>Description...</p>
                  <img src={link} alt="" />
                </div>
              </a>
            </div>
            <div className="item">
              <div className='project-number'>
                <p>1</p>
              </div>
              <a href="/">
                <div className='project-text'>
                  <p>Description...</p>
                  <img src={link} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project