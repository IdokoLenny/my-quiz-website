import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'text-red-400 mx-3' : 'text-black-400 mx-3'}>
      <p>{value}</p>
      {/* <span>{type}</span> */}
    </div>
  );
};

export default DateTimeDisplay;
