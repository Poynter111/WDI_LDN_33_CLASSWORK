import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma';
import './assets/scss/style.scss';

import Messages from './components/Messages';
import Form from './components/Form';

class App extends React.Component {

  state = {
    messages: [],
    message: ''
  };

  handleChange = (e) => {
    this.setState({ message: e.target.value }, () => console.log(this.state));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const messages = this.state.messages.concat(this.state.message);
    this.setState({ messages, message: '' });
  }

  render() {
    return (
      <main>
        <section className="section">
          <div className="container">
            <Messages messages={this.state.messages} />
            <hr />
            <Form
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              message={this.state.message}
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
