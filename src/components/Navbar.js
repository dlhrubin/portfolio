import React, {Component} from "react";
import {Link} from "react-scroll";

export class Navbar extends Component {
    render() {
        return(
            <nav className="navbar">
                <ul>
                    <li>
                        <Link activeClass="active" to="landing" spy={true} smooth={true}>
                            <i className="fas fa-user-circle"></i>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="projects" spy={true} smooth={true}>
                            <i className="fas fa-code"></i>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={true}>
                            <i className="far fa-envelope"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}