import React from 'react';

const Student = ({ name, github }) => {



  return (
    <div>
      <h1>{name}</h1>
      <a href={`https://github.com/${github}`}>A like for {name}s Github</a>
    </div>
  );
};


export default Student;
