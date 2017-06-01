import React from 'react';

// http://colebemis.com/feather/icons/square.svg
// http://colebemis.com/feather/icons/check-square.svg

const Symbols = () => (
  <svg width="0" height="0">
    <symbol id="uncompleted" viewBox="2 -2 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    </symbol>
    <symbol id="completed" viewBox="2 -2 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 23 3"/>
      <path d="M21,12v7a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H16"/>
    </symbol>
  </svg>
);

export default Symbols;
