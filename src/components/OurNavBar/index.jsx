import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

export class OurNavBar extends Component {
    constructor(){
      super();
      this.state = {
        activeComponent: 'activeHome'
      }
      this.handleClickNav = this.handleClickNav.bind(this);
      this.changeNameActive = this.changeNameActive.bind(this);
    }

    handleClickNav(event){
      event.preventDefault();

      const active = event.target.name;
      const noactive = this.state.activeComponent;

      this.props.changeComponent(active, noactive);

      this.changeNameActive(active);
    }

    changeNameActive(active){
      this.setState({
          activeComponent: active
      })
    }

    render() {
        const { changeComponent } = this.props;
        console.log(changeComponent);
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Brand name="activeHome" onClick={(event) => this.handleClickNav(event)}>App</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                      <NavDropdown.Item name="activeForm" onClick={(event) => this.handleClickNav(event)}>Form</NavDropdown.Item>
                      <NavDropdown.Item name="activeGraphics" onClick={(event) => this.handleClickNav(event)}>Graphics</NavDropdown.Item>
                      <NavDropdown.Item name="activeAdvice" onClick={(event) => this.handleClickNav(event)}>Advice</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
        )
    }
}

export default OurNavBar;
