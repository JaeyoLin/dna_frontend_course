import React from 'react';

const Hello = ({ backgroundColor }) => {
  const style = {
    backgroundColor,
    width: 200,
    height: 50,
    lineHeight: '50px',
    fontSize: 50,
    borderRadius: 10,
    color: 'black',
  };
  return (
    <div style={style}>Hello</div>
  );
};

export default Hello;