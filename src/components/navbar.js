
import { h, Component } from 'preact';

export default class NavBar extends Component {
  render() {
    return (
      <nav class="main-nav">
        <div class="container">
          <ul>
            <li class="mobile-button"><a href="#">Menu</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/tutorial">Tutorial</a></li>
            <li><a href="/demos">Demos</a></li>
            <li><a href="/docs">Docs</a></li>
            <li><a href="https://github.com/y-js/yjs/" target='_blank'>GitHub</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}