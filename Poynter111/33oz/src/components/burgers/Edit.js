import React from 'react';
import BurgerForm from './Form';
import axios from 'axios';

class BurgersEdit extends React.Component {

  state = {};

  componentDidMount() {
    axios.get(`/api/burgers/${this.props.match.params.id}`)
      .then(res => this.setState(res.data, () => console.log(this.state)));
  }

  handleChange = ({target: { name, value} }) => {
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  handlePlaceChange = ({ formatted_address, geometry: { location }}) => {
    this.setState({ address: formatted_address, location: location.toJSON()});
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    axios.put(`/api/burgers/${id}`, this.state)
      .then(() => this.props.history.push(`/burgers/${id}`));
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

export default BurgersEdit;
