import React, {Component} from "react";

export class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="navbar">
                <button>
                    <i className="fas fa-user-circle"></i>
                </button>
                <button>
                    <i className="fas fa-code"></i>
                </button>
                <button>
                    <i className="far fa-envelope"></i>
                </button>
            </div>
        )
    }
}