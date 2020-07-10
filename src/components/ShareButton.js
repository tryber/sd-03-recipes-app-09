import React from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

const copyLinkToClipboard = (pathname) => {
  navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
  const button = document.getElementById('share-button');
  const buttonWrapper = document.getElementById('share-button-wrapper');
  const copyAlert = document.createElement('span');
  copyAlert.innerHTML = 'Link copiado!';
  buttonWrapper.removeChild(button);
  buttonWrapper.appendChild(copyAlert);
  setTimeout(() => {
    buttonWrapper.removeChild(copyAlert);
    buttonWrapper.appendChild(button);
  }, 1000);
};

const ShareButton = () => {
  const { pathname } = useLocation();
  return (
    <div id="share-button-wrapper">
      <button
        id="share-button"
        data-testid="share-btn"
        type="button"
        onClick={() => copyLinkToClipboard(pathname)}
      >
        <img alt="share-icon" src={shareIcon} />
      </button>
    </div>
  );
};

export default ShareButton;
