

import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Races from './Races';
import { Nav, Navbar, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const App = () => (
<Router>
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">VASST Times</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/"><NavItem>Home</NavItem></LinkContainer>
            <LinkContainer to="/races"><NavItem>Races</NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/" component={Home}/>
      <Route path="/races" component={Races}/>
    </div>
  </Router>
)
export default App
