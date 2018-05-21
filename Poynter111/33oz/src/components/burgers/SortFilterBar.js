import React from 'react';

const SortFilterBar = ({ handleChange, data, showMapView, hideMapView }) => {
  return(
    <div className="columns">
      <div className="field column is-5">
        <input className="input" placeholder="Search" name="search" onChange={handleChange} value={data.search}/>
      </div>
      {!data.mapView &&<div className="field column is-5">
        <div className="control">
          <div className="select">
            <select onChange={handleChange} name="sort" value={data.sort}>
              <option value="name|asc">Name (A - Z)</option>
              <option value="name|desc">Name (Z - A)</option>
              <option value="price|desc">Price (Hi - Lo)</option>
              <option value="price|asc">Name (Lo - Hi)</option>
            </select>
          </div>
        </div>
      </div>}
      <div className="buttons has-addons column is-2">
        <button
          className="button"
          onClick={showMapView}
        >Map</button>
        <button
          className="button"
          onClick={hideMapView}
        >Grid</button>
      </div>
    </div>
  );
};

export default SortFilterBar;
