import React from 'react';
import shareIcon from '../images/shareIcon.svg';

const copyLinkToClipboard = () => {
  const textArea = document.createElement('textarea');
  textArea.value = window.location.href;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  const titleWrapper = document.getElementById('title-wrapper');
  const copyAlert = document.createElement('span');
  copyAlert.innerHTML = 'Link copiado!';
  titleWrapper.appendChild(copyAlert);
};

const ShareButton = () => (
  <button data-testid="share-btn" type="button" onClick={copyLinkToClipboard}>
    <img alt="share-icon" src={shareIcon} />
  </button>
);

export default ShareButton;
