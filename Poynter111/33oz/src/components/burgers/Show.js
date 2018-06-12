import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Map from '../common/Map';
import Auth from '../../lib/Auth';
import BurgerCommentForm from './Comments';

class BurgersShow extends React.Component {
  state = {
    comment: {}
  }

  componentDidMount(){
    axios.get(`/api/burgers/${this.props.match.params.id}`)
      .then(res => this.setState({burger: res.data}));
  }

  handleDelete = () => {
    axios.delete(`/api/burgers/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/burgers'));
  }

  handleChange = ({target: { name, value} }) => {
    const comment = { ...this.state.comment, [name]: value };
    this.setState({ comment });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    axios.post(`/api/burgers/${id}/comments`, this.state.comment, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => this.setState({ burger: res.data, comment: {} }));
  }

  handleCommentDelete = (comment) => {
    const { id } = this.props.match.params;
    axios.delete(`/api/burgers/${id}/comments/${comment._id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => this.setState({ burger: res.data }));
  }

  render(){
    const { burger } = this.state;
    if(!burger) return null;
    return(

      <div className="columns">
        <div className="column">
          <div className="hero-iamge" style={{ backgroundImage: `url(${burger.image})`}} />
          {burger.comments.map(comment =>
            <div key={comment._id}>
              <p>{comment.content}</p>
              <p>{comment.rating}</p>
              <p>{comment.createdBy.username}</p>
              {Auth.isCurrentUser(comment.createdBy) &&<button
                className="button is-danger"
                onClick={() => this.handleCommentDelete(comment)}
              >Delete</button>}
            </div>
          )}
        </div>
        <div className="column">
          <h1 className="title is-1">{burger.name}</h1>
          <h2 className="subtitle is-2">{burger.restaurant}</h2>
          <p>{burger.description}</p>
          <p className="price">{ '💰'.repeat(burger.price) }</p>
          <Map center={burger.location} />
          {Auth.isAuthenticated() && <BurgerCommentForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            comment={this.state.comment}
          />}
          <hr />
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
