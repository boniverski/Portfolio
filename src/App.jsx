import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import logo from './assets/React-icon.png';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <header>
        <div className="nav-left left">
          <Link to="/">
            <img className="nav-logo" src={logo} alt="Boško Rabrenović" />
          </Link>
        </div>
        <nav className="nav-right">
          <ul className="">
            <li><Link to="#about">About Me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
