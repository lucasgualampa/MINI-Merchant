import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import "./NewNavbar.css";
import SearchBar from "./SearchBar";

// If i want to use fontawesome icons, the <i> tag, i have to add a <Link> in folder public-->index.html

export default function NewNavbar() {
    return (
        <ReactBootStrap.Navbar
            collapseOnSelect
            expand="xl"
            bg="danger"
            variant="dark"
        >
            <ReactBootStrap.Navbar.Brand href="/">
                MINI-Merchant <i class="fas fa-comment-dollar" />
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                    <Link to="/">
                        <ReactBootStrap.Nav.Link href="#features">
                            Pagina Principal
                        </ReactBootStrap.Nav.Link>
                    </Link>
                </ReactBootStrap.Nav>
                <SearchBar />
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    );
}
