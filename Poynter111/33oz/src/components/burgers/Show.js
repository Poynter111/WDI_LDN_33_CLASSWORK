import React from 'react';
import axios from 'axios';

class BurgersShow extends React.Component {
  state = {
    burger: null
  }

  componentDidMount(){
    console.log(this.props.match.params.id);
    axios.get(`/api/burgers/${this.props.match.params.id}`)
      .then(res => this.setState({burger: res.data}));
  }
  render(){
    return(
      <div>
        <h1 className="title">Burgers Show page</h1>
        {this.state.burger && <div className="card">
          <header className="card-header">
            <h2 className="card-header-title">{this.state.burger.name}</h2>
          </header>
          <img src={this.state.burger.image} />
        </div>}
      </div>
    );
  }
}

export default BurgersShow;
