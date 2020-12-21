import React from 'react';
import { CoursePart } from '../types';
import Part from './part';

const Content: React.FC<{ content: CoursePart[] }> = ({ content }) => {
  return (
    <div>
      {content.map((x) => (
        <Part part={x} key={x.name} />
      ))}
    </div>
  );
};

export default Content;
