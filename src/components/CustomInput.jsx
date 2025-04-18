import React from 'react';
import '../assets/css/custom-input.css';

export const CustomInput = ({ ...rest }) => {
  return <input {...rest} className='custom-input' />;
};
