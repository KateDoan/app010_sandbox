import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="https://www.healthhub.sg/programmes" target="_blank" rel="noreferrer noopener">
                            <span><FontAwesomeIcon icon={['fas', 'heartbeat']} size="lg" /></span> Let's Beat Diabetes 
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link"  to='/info' target="_blank" rel="noreferrer noopener">
                                    <span><FontAwesomeIcon icon={['fas', 'info-circle']} /></span> Info
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus' target="_blank" rel="noreferrer noopener">
                                    <span><FontAwesomeIcon icon={['fas', 'list']} /></span> About Us
                                </NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;