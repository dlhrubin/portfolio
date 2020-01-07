import React, {Component} from "react";

export class Navbar extends Component {
    render() {
        return(
            <nav className="navbar">
                <a href="#landing">
                    <i className="fas fa-user-circle"></i>
                </a>
                <a href="#projects">
                    <i className="fas fa-code"></i>
                </a>
                <a href="#contact">
                    <i className="far fa-envelope"></i>
                </a>
            </nav>
        )
    }
}