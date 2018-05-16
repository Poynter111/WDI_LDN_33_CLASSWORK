import React from 'react';

const Messages = ({ messages }) => {
  return (
    <ul>
      {messages.map((messages, i) => <li key={i}>
        <span>{messages}</span>
      </li>)}
    </ul>
  );
};

export default Messages;
