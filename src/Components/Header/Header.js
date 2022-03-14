import React from "react";
import './Header.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,


} from 'reactstrap';

import Logo from '../../Assests/logo.png'

const Header = () => {
    return (
        <div className=" Navigation">

            <Navbar style={{

                backgroundColor: "#D70f64",
                height: "70px",

            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand  ">
                    <img src={Logo} alt="Logo" width="80px" />
                </NavbarBrand>

                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink href="#" className="NavLink"> Something </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

        </div>
    )
}

export default Header;