import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SortFilterBar from './SortFilterBar';
import Map from '../common/Map';


class BurgersIndex extends React.Component {
  state = {
    burgers: [],
    search: '',
    sort: 'name|asc',
    mapView: true,
    sortDropDown: false
  }

  componentDidMount() {
    axios.get('/api/burgers')
      .then(res => this.setState({ burgers: res.data }));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  showMapView = () => {
    this.setState({ mapView: true });
  }
  hideMapView = () => {
    this.setState({ mapView: false });
  }

  showSortView = () => {
    this.setState({ sortDropDown: true });
  }
  hideSortView = () => {
    this.setState({ sortDropDown: false });
  }

  sortedFilteredBurgers = () => {
    const [field, dir] = this.state.sort.split('|');
    const re = new RegExp(this.state.search, 'i');
    const filtered = _.filter(this.state.burgers, burger => {
      return re.test(burger.name) || re.test(burger.restaurant);
    });
    return _.orderBy(filtered, field, dir);
  }

  render() {
    return (
      <div>
        <SortFilterBar
          handleChange={this.handleChange}
          data={this.state}
          showMapView={this.showMapView}
          hideMapView={this.hideMapView}
        />
        {!this.state.mapView && <div className="columns is-multiline">
          {this.sortedFilteredBurgers().map(burger =>
            <div className="column is-one-third-desktop is-half-tablet" key={burger._id}>
              <Link to={`/burgers/${burger._id}`}>
                <div className="card">
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${burger.image})` }}
                  ></div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{burger.name}</p>
                        <p className="subtitle is-6">{burger.restaurant}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>}
        {this.state.mapView &&
          <Map
            className="burger-index"
            center={{ lat: 51.5151, lng: -0.0718 }}
            markers={this.sortedFilteredBurgers()}
          />
        }
      </div>
    );
  }
}

export default BurgersIndex;
