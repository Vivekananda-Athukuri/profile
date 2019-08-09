// global Calendly
import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf, faClock, faComment } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <div id="profile" title="Vivekananda Athukuri">
          <img src="/profile-2.jpg" alt="profile" />
        </div>
        <div className="name">
          <div id="firstname">Vivekananda</div>
          <div id="lastname">Athukuri</div>
        </div>
        <div className="links">
          <a className="App-link" id="github" href="https://github.com/Vivekananda-Athukuri" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="App-link" id="linkedin" href="https://www.linkedin.com/in/vivekananda-athukuri/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="App-link" id="email" href="mailto:vivekananda.tagore@protonmail.com" target="_blank" rel="noopener noreferrer" title="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a className="App-link" id="resume" href="https://www.visualcv.com/pdfs/5224336/" target="_blank" rel="noopener noreferrer" title="Resume">
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
        <div className="chat-links">
          <div className="calendly" onClick={() => window.Calendly.initPopupWidget({url: 'https://calendly.com/vivekananda-athukuri/schedule'})}>
            <FontAwesomeIcon icon={faClock} /> schedule a meeting
          </div>
          <div className="skype">
            <FontAwesomeIcon icon={faSkype} /> vivekananda.athukuri
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
