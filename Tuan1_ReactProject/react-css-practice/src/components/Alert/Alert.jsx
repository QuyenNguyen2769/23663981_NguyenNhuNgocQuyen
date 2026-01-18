import React, { useState } from 'react';
import './Alert.css';

const Alert = ({ type, message, onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      <button className="close-btn" onClick={handleClose}>×</button>
    </div>
  );
};

export default Alert;