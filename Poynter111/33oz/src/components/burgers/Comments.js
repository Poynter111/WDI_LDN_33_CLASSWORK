import React from 'react';

const BurgerCommentForm = ( {handleChange, handleSubmit, comment} ) => {
  return (

    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="content">Comment...</label>
        <textarea id="content" name="content" className="textarea" placeholder="Comment" onChange={handleChange} value={comment.content || ''}/>
      </div>
      <div className="field">
        <label htmlFor="rating">Rating</label>
        <div className="control">
          <div className="select">
            <select id="rating" name="rating" onChange={handleChange}
              value={comment.rating || ''}>
              <option>Please select</option>
              <option value="1">💰</option>
              <option value="2">💰💰</option>
              <option value="3">💰💰💰</option>
              <option value="4">💰💰💰💰</option>
              <option value="5">💰💰💰💰💰</option>
            </select>
          </div>
        </div>
      </div>
      <button className="button is-primary">Add Comment</button>
    </form>
  );
};

export default BurgerCommentForm;
