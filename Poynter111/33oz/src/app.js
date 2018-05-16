import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from './components/Home';
import BurgersIndex from './components/burgers/Index';
import BurgersShow from './components/burgers/Show';

import 'bulma';
// import './assets/scss/style.scss';

class App extends React.Component {

  //-------------------------------------------------------------START-OF-RENDER
  render(){
    return (
      <Router>
        <main className="wrap">
          <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/burgers">All the Burgers</Link>
          </nav>
          <Switch>
            <Route path="/burgers/:id" component={BurgersShow} />
            <Route path="/burgers" component={BurgersIndex} />
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </Router>
    );
  }
}
//-----------------------------------------------------------------END-OF-RENDER
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
