import React from 'react';
import './Button.css';

const Button = ({ type = 'primary', children, onClick }) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;