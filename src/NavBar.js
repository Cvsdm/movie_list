import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import routes from "./router/routes";

/**
 * Creation of our Navigation Bar
 * @returns {JSX.Element} - Navigation Bar
 */
function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href={routes.home}>Movie Finder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href={routes.home}>Movie List</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;
