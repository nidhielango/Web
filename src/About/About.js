import React, {useEffect, useRef} from "react";
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import img from '../Assets/background.png';
import arrow from '../Assets/link.png';
import './About.css';

function About() {
  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .8});
  
  useEffect(() => {

    const Image = images.lastElementChild;

    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    // Removes initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    // Images Animation
    tl.from(Image, 1.4, {y: 1280, ease: Power3.easeOut}, .2)
    .from(Image.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

    // Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

  }, [tl])



  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">1</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">2</div>  
                </div>
              </h1>
              <p>
                About
              </p>
              <div className="btn-row">
                <button className="resume-button">Resume
                  <div className="arrow-icon">
                    <img src={arrow} alt="row"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div ref={el => images = el}  className="hero-images-inner">
              <div className="hero-image image">
                <img src={img} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About