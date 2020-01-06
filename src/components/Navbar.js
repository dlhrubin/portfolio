import React, {Component} from "react";

export class Navbar extends Component {
    render() {
        return(
            <nav className="navbar">
                <button>
                    <i className="fas fa-user-circle"></i>
                </button>
                <button>
                    <i className="fas fa-code"></i>
                </button>
                <button>
                    <i className="far fa-envelope"></i>
                </button>
            </nav>
        )
    }
}