import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import './style.scss';

export class OurNavBar extends Component {
  constructor() {
    super();
    this.state = {
      activeComponent: 'activeHome'
    };
    this.handleClickNav = this.handleClickNav.bind(this);
    this.changeNameActive = this.changeNameActive.bind(this);
  }

  handleClickNav(event) {
    event.preventDefault();

    const active = event.target.name;
    const noactive = this.state.activeComponent;

    this.props.changeComponent(active, noactive);

    this.changeNameActive(active);
  }

  changeNameActive(active) {
    this.setState({
      activeComponent: active
    });
  }

  render() {
    const { changeComponent } = this.props;
    console.log(changeComponent);
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand name="activeHome" onClick={event => this.handleClickNav(event)}>
            <img className="Logo" src="/gap.png" alt="GAPP" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown.Item
                className="navStyle"
                name="activeForm"
                onClick={event => this.handleClickNav(event)}
              >
                Form
              </NavDropdown.Item>
              <NavDropdown.Item
                className="navStyle"
                name="activeGraphics"
                onClick={event => this.handleClickNav(event)}
              >
                Graphics
              </NavDropdown.Item>
              <NavDropdown.Item
                className="navStyle"
                name="activeAdvice"
                onClick={event => this.handleClickNav(event)}
              >
                Advice
              </NavDropdown.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default OurNavBar;
