import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copyLinkToClipboard = (pathname, id) => {
  const url = pathname.includes('/comidas') ? '/comidas' : '/bebidas';
  navigator.clipboard.writeText(`http://localhost:3000${url}/${id}`);
  const buttonWrapper = document.getElementById('share-button-wrapper');
  const copyAlert = document.createElement('span');
  copyAlert.innerHTML = 'Link copiado!';
  buttonWrapper.appendChild(copyAlert);
  setTimeout(() => {
    buttonWrapper.removeChild(copyAlert);
  }, 1000);
};

const ShareButton = ({ testid, path, id }) => {
  const { pathname } = useLocation();
  const caminho = pathname.includes('receitas') ? path : pathname;
  return (
    <div id="share-button-wrapper">
      <button
        id="share-btn"
        data-testid={testid || 'share-btn'}
        type="button"
        onClick={() => copyLinkToClipboard(caminho, id)}
      >
        <img alt="share-icon" src={shareIcon} data-testid={testid} />
      </button>
    </div>
  );
};

ShareButton.propTypes = {
  testid: PropTypes.string.isRequired,
  path: PropTypes.string,
  id: PropTypes.string.isRequired,
};

ShareButton.defaultProps = {
  path: '/',
};

export default ShareButton;
