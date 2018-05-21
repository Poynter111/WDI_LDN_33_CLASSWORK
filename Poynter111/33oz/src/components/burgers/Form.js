import React from 'react';
import AutoComplete from '../common/AutoComplete';

const BurgerForm = ( {handleChange, handleSubmit, handlePlaceChange, burger} ) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" className="input" placeholder="Name"  onChange={handleChange} value={burger.name || ''}/>
      </div>
      <div className="field">
        <label htmlFor="restaurant">Restaurant</label>
        <input id="restaurant" name="restaurant" className="input" placeholder="Restaurant"  onChange={handleChange} value={burger.restaurant || ''}/>
      </div>
      <div className="field">
        <label htmlFor="image">Image</label>
        <input id="image" name="image" className="input" placeholder="Image"  onChange={handleChange} value={burger.image || ''}/>
      </div>
      <div className="field">
        <label htmlFor="address">Address</label>
        <AutoComplete id="address" name="address" className="input"
          placeholder="address" handlePlaceChange={handlePlaceChange}
          value={burger.address || ''}
        />
      </div>
      <div className="field">
        <label htmlFor="price">Price</label>
        <div className="control">
          <div className="select">
            <select id="price" name="price" onChange={handleChange} value={burger.price || ''}>
              <option>Please select</option>
              <option value="1">💰</option>
              <option value="2">💰💰</option>
              <option value="3">💰💰💰</option>
            </select>
          </div>
        </div>
      </div>
      <button className="button is-primary">Submit</button>
    </form>
  );
};

export default BurgerForm;
