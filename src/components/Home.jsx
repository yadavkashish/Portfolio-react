import React from 'react';
import './Home.css';  


function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, It's <span id="name">Kashish</span>
        </h1>
        <h3 className="text-animation">
          I'm a <span></span>
        </h3>
        <p>KIET Group of Institutions</p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/kashishyadav20/" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="https://github.com/yadavkashish" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-github'></i>
          </a>
          <a href="https://www.instagram.com/yadav._.kashish/" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-instagram-alt'></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-twitter'></i>
          </a>
        </div>

        <div className="btn-group">
          <a
            href="https://drive.google.com/file/d/1-Jjc56yGFna9Tg2k7SrAwiBWoE7N2L3-/view?usp=drivesdk"
            target="_blank" rel="noopener noreferrer"
            className="btn"
          >
            Download CV
          </a>
          <a href="/contact" className="btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="home-img">
       <img src="https://media-hosting.imagekit.io//7778a535ed8b43f8/Picture1.jpg?Expires=1832403951&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=e9~pJBwhvhkSPf7FU2kP8k67Ve21ApHtBeJamaSbyr-mkPR2yMyVBlIUGgFUH2hQkIT6BTuI2qNvR0TZ2EsTAJuc~DYjciK1IKde4EXpyzuqVSmeYuREYMODYLL00pkPtkFDcm8U611tYX8hUmbJTApUshWcJda1T5wpLs4tPltBaYGsE-4pjgtTjMfvcrb0jpHzED1ysyOElgnQnXf1DkfwcW1QlVaC95NLM7wKE-cbBRXhfG7ZbGUK708wJSJS51jgyxdoSHiVwhjZ~TDlf0WW1MzTGPHzrglNYWF7w1ZzADLW~np-Eb8LrpEpVZMnDR7tkasLQe6raMJM-Fe5ZA__" alt="kashish" />
      </div>
    </section>
  );
}

export default Home;
