import React from 'react';
import BurgerForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';


class BurgersNew extends React.Component {

  state = {
    errors: {}
  };

  handleChange = ({target: { name, value} }) => {
    const errors = { ...this.state.errors, [name]: ''};
    this.setState({errors, [name]: value });
  }

  handlePlaceChange = ({ formatted_address, geometry: { location }}) => {
    this.setState({ address: formatted_address, location: location.toJSON()});
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/burgers', this.state, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/burgers'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render(){
    return <BurgerForm
      burger={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      handlePlaceChange={this.handlePlaceChange}
      errors={this.state.errors}
    />;
  }

}

export default BurgersNew;
