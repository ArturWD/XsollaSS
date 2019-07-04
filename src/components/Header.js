import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__logo">
        <img className="header__logo-img" src="data:image/png;base64,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" alt="Xsolla"/>
        <h1 className="header__logo-xsolla">Xsolla</h1>
      </div>
      <div className="header__author author">
        <h2 className="author__name">Artur Shestakov</h2>
        <div className="author__links">
          <a className="author__link" href="https://vk.com/id133115737"><FontAwesomeIcon icon={faVk} className="link"/></a>
          <a className="author__link" href="https://github.com/ArturWD"><FontAwesomeIcon icon={faGithub} className="link"/></a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
