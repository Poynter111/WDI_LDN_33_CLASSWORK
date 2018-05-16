import React from 'react';

const Form = ({handleChange, handleSubmit, message}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <input
          className="input"
          name="messages"
          placeholder="Message"
          onChange={handleChange}
          value={message}
        />
      </div>
      <button className="button is-primary">Submit</button>
    </form>
  );
};

export default Form;
