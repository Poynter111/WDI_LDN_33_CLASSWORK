import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BurgersIndex extends React.Component {
  state = {
    burgers: []
  }

  componentDidMount(){
    axios.get('/api/burgers')
      .then(res => this.setState({ burgers: res.data }));
  }

  render(){
    return(
      <div>
        <h1 className='title'>Burgers Index</h1>
        <ul>
          {this.state.burgers.map(burger =>
            <div key={burger._id} className='card'>
              <header className="card-header">
                <Link to={`/burgers/${burger._id}`}><p className="card-header-title">{burger.name}</p></Link>
              </header>
              <p>{burger.restaurant}</p>
              <p>{burger.address}</p>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default BurgersIndex;
