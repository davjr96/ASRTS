import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Races from "./Races";
import Practices from "./Practices"
import Home from "./Home"
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";



const App = () =>
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
            <LinkContainer to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/races">
              <NavItem>Races</NavItem>
            </LinkContainer>
            <LinkContainer to="/practices">
              <NavItem>Practice Archives</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/" component={Home} />
      <Route path="/races" component={Races} />
      <Route path="/practices" component={Practices} />
    </div>
  </Router>;
export default App;
