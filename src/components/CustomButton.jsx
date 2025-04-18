import React from 'react';
import '../assets/css/custom-button.css';
export const CustomButton = ({ text, ...rest }) => {
  return <button {...rest}>{text}</button>;
};
