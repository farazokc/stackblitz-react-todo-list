import React from 'react';
import './style.css';

const Footer = ({ length }) => {
  return (
    <div>
      <p>
        {length} list {length === 1 ? 'item' : 'items'}
      </p>
    </div>
  );
};
export default Footer;
