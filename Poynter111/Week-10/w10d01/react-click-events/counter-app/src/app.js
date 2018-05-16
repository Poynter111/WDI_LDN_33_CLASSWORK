import React from 'react';
import ReactDOM from 'react-dom';

import Buttons from './components/Buttons';

import 'bulma';

class App extends React.Component {

    state = { counter: 0 };

  increment = () => this.setState({ counter: this.state.counter + 1 });
  decrement = () => this.setState({ counter: this.state.counter - 1 });
  reset = () => this.setState({ counter: 0 });

  render(){
    return(
      <main>
        <section className="section">
          <div className="container">
            <h1 className="title">{this.state.counter}</h1>
            <hr />
            <Buttons
              increment={this.increment}
              decrement={this.decrement}
              reset={this.reset}
            />
          </div>
        </section>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
