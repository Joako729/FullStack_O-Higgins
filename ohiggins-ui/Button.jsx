import React from 'react';

export const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button 
      type={type} 
      onClick={onClick}
      style={{
        padding: '12px 24px',
        backgroundColor: '#004a99',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold'
      }}
    >
      {children}
    </button>
  );
};