import React from 'react';
import BurgerForm from './Form';
import axios from 'axios';


class BurgersNew extends React.Component {

  state = {};

  handleChange = ({target: { name, value} }) => {
    this.setState({ [name]: value });
  }

  handlePlaceChange = ({ formatted_address, geometry: { location }}) => {
    this.setState({ address: formatted_address, location: location.toJSON()});
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/burgers', this.state)
      .then(() => this.props.history.push('/burgers'));
  }

  render(){
    return <BurgerForm
      burger={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      handlePlaceChange={this.handlePlaceChange}
    />;
  }

}

export default BurgersNew;
