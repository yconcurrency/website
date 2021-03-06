import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import NavBar from './navbar'
import Footer from './footer'
import Home from '../routes/home';
import Demos from '../routes/demos';

// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
  require('preact/debug');
}

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Demos path="/demos" />
        </Router>
        <Footer />
      </div>
    )
    /*
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
        </Router>
      </div>
    );*/
  }
}
