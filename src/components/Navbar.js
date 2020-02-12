import React, {Component} from "react";
import {Link} from "react-scroll";

export class Navbar extends Component {
    render() {
        return(
            <nav className="navbar">
                <ul>
                    <li>
                        <Link activeClass="active" to="landing" spy={true} smooth={true}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="projects" spy={true} smooth={true}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={true}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}