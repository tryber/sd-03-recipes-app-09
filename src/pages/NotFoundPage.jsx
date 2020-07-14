import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const NotFoundPage = () => {
  const [showNotFound, setShowNotFound] = useState(true);
  setTimeout(() => setShowNotFound(false), 5000);
  if (showNotFound) return <h1>Not Found</h1>;
  return <Redirect to="/" />;
};

export default NotFoundPage;
