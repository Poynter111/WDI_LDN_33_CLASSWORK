import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import BurgersIndex from './components/burgers/Index';
import BurgersShow from './components/burgers/Show';
import BurgersNew from './components/burgers/New';
import BurgersEdit from './components/burgers/Edit';

import 'bulma';
import './assets/scss/style.scss';

class App extends React.Component {

  //-------------------------------------------------------------START-OF-RENDER
  render(){
    return (
      <Router>
        <main>
          <NavBar>
            <Link to='/burgers' className="navbar-item">All the Burgers</Link>
            <Link to='/burgers/new' className="navbar-item">Add a Burger</Link>
            {/* <Link className="navbar-item">Logout</Link>
            <Link className="navbar-item">Register</Link>
            <Link className="navbar-item">Login</Link> */}
          </NavBar>
          <section className="section">
            <div className="container">
              <Switch>
                <Route path="/burgers/new" component={BurgersNew} />
                <Route path="/burgers/:id/edit" component={BurgersEdit} />
                <Route path="/burgers/:id" component={BurgersShow} />
                <Route path="/burgers" component={BurgersIndex} />
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </section>
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
