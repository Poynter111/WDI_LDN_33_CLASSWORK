import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Map from '../common/Map';

class BurgersShow extends React.Component {
  state = {
    burger: null
  }

  componentDidMount(){
    console.log(this.props.match.params.id);
    axios.get(`/api/burgers/${this.props.match.params.id}`)
      .then(res => this.setState({burger: res.data}));
  }

  handleDelete = () => {
    axios.delete(`/api/burgers/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/burgers'));
  }

  render(){
    const { burger } = this.state;
    if(!burger) return null;
    return(

      <div className="columns">
        <div className="column">
          <div className="hero-iamge" style={{ backgroundImage: `url(${burger.image})`}} />
        </div>
        <div className="column">
          <h1 className="title is-1">{burger.name}</h1>
          <h2 className="subtitle is-2">{burger.restaurant}</h2>
          <p>{burger.description}</p>
          <p className="price">{ '💰'.repeat(burger.price) }</p>
          <Map center={burger.location} />

          <div className="columns">
            <div className="column">
              <Link
                to={`/burgers/${burger._id}/edit`}
                className="button"
              >Edit</Link>
            </div>
            <div className="column">
              <button
                onClick={this.handleDelete}
                className="button is-danger"
              >Delete</button>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default BurgersShow;
