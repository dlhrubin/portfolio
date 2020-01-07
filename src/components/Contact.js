import React, {Component} from "react";

export class Contact extends Component {
    render() {
        return(
            <section id="contact">
                <div>
                    <h2>Get in touch!</h2>
                    <div className="contact-icons">
                        <a href="https://github.com/dlhrubin" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/dlhrubin/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:dlhrubin@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-at"></i>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}