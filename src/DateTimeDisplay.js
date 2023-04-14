import React from 'react';

const DateTimeDisplay = ({ value, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <h3>Time-limit</h3><p>{value}</p>
    
    </div>
  );
};

export default DateTimeDisplay;
