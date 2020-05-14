import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from '../../src/components/Home/Home.js'
import {ReactPage} from '../../src/components/React/React.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
    <Router>
      <div className="App">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/react' exact component={ReactPage} />
            {/* 
            <ProtectedRoute path='/loggedin' component={LoggedIn} />
            */}
            <Route path="*" component={() => "404, Page Not Found"} />
          </Switch>
      </div>
    </Router>
  );
}
}

export default App;
