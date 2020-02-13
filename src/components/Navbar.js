import React, {Component} from "react";
import {Link} from "react-scroll";
import portfolioIcon from "../img/portfolio_icon.PNG";

export class Navbar extends Component {
    render() {
        return(
            <nav className="navbar">
                <ul>
                    <li className="home-btn">
                        <Link activeClass="active" to="landing" spy={true} smooth={true}>
                            <img src={portfolioIcon} alt="Portfolio icon" />
                        </Link>
                    </li>
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