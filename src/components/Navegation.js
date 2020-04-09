import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import ShopCart from './ShopCart.js';

class Navigation extends React.Component {
    render() {
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{this.props.title}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <ShopCart/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }

}

export default Navigation;