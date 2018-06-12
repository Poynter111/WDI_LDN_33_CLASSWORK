import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import BurgersIndex from './components/burgers/Index';
import BurgersShow from './components/burgers/Show';
import BurgersNew from './components/burgers/New';
import BurgersEdit from './components/burgers/Edit';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import SecureRoute from './components/common/SecureRoute';
import FlashMessage from './components/common/FlashMessages';
import NotFound from './components/common/NotFound';


import 'bulma';
import './assets/scss/style.scss';

class App extends React.Component {

  //-------------------------------------------------------------START-OF-RENDER
  render(){
    return (
      <Router>
        <main>
          <NavBar />
          <FlashMessage />
          <section className="section">
            <div className="container">
              <Switch>
                <SecureRoute path="/burgers/new" component={BurgersNew} />
                <SecureRoute path="/burgers/:id/edit" component={BurgersEdit} />
                <Route path="/burgers/:id" component={BurgersShow} />
                <Route path="/burgers" component={BurgersIndex} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
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
