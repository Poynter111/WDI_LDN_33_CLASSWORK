import React from 'react';
import BurgerForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';

class BurgersEdit extends React.Component {

  state = {
    errors: {}
  };

  componentDidMount() {
    axios.get(`/api/burgers/${this.props.match.params.id}`)
      .then(res => this.setState(res.data));
  }

  handleChange = ({target: { name, value} }) => {
    const errors = { ...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value });
  }

  handlePlaceChange = ({ formatted_address, geometry: { location }}) => {
    this.setState({ address: formatted_address, location: location.toJSON()});
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    axios.put(`/api/burgers/${id}`, this.state, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/burgers/${id}`))
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

export default BurgersEdit;
