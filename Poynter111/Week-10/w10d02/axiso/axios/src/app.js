import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bulma';

class App extends React.Component {

  state = {

  }

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({ countries: res.data }));
  }


  render(){
    // if(!this.state.countries) return null;
    return(
      <main>
        <h1 className="title">Flags of the world</h1>
        {!this.state.countries && <p>Loading...</p>}
        {this.state.countries && <ul>
          {this.state.countries.map(country =>
            <li key={country.alpha3Code}>
              <img src={country.flag} width="200" />
              <p>{country.name}</p>
            </li>
          )}
        </ul>}
      </main>
    );
  }

}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
