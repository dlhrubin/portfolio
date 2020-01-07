import React, {Component} from "react";

export class Landing extends Component {
    render() {
        return(
            <section id="landing">
                <div className="intro">
                    <p>I'm Danielle, a front-end developer</p>
                    <div><span>React</span><span className="dot">&#775;</span><span>JavaScript</span><span className="dot">&#775;</span><span>HTML</span><span className="dot">&#775;</span><span>SCSS</span></div>
                </div>
                <i className="fas fa-angle-double-down"></i>
            </section>
        )
    }
}