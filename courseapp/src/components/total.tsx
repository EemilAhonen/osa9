import React from 'react';

const Total: React.FC<{ total: string }> = ({ total }) => {
  return <p>Number of exercises {total}</p>;
};

export default Total;
