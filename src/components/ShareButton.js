import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  }, 2000);
};

const ShareButton = ({ testid, path }) => {
  const { pathname } = useLocation();
  const caminho = pathname.includes('receitas-feitas') ? path : pathname;
  return (
    <div id="share-button-wrapper">
      <button
        id="share-button"
        type="button"
        onClick={() => copyLinkToClipboard(caminho)}
      >
        <img alt="share-icon" src={shareIcon} data-testid={testid} />
      </button>
    </div>
  );
};

ShareButton.propTypes = {
  testid: PropTypes.string.isRequired,
  path: PropTypes.string,
};

ShareButton.defaultPros = {
  path: '/',
};

export default ShareButton;
