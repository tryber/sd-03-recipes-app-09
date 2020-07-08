import React from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

const copyLinkToClipboard = (pathname) => {
  navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
  const titleWrapper = document.getElementById('title-wrapper');
  const copyAlert = document.createElement('span');
  copyAlert.innerHTML = 'Link copiado!';
  titleWrapper.appendChild(copyAlert);
  setTimeout(() => titleWrapper.removeChild(copyAlert), 1000);
};

const ShareButton = () => {
  const { pathname } = useLocation();
  return (
    <button data-testid="share-btn" type="button" onClick={() => copyLinkToClipboard(pathname)}>
      <img alt="share-icon" src={shareIcon} />
    </button>
  );
};

export default ShareButton;
