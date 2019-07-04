import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <h5>You can find this project on </h5> <a className="project-link link" href="https://github.com/ArturWD/Xsolla-Summer-School"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
        </div>
    </footer>
);

export default Footer;