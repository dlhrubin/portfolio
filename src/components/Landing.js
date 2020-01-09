import React, {Component} from "react";

export class Landing extends Component {
    render() {
        return(
            <section id="landing">
                <div className="intro">
                    <p>I'm Danielle, a front-end developer</p>
                    <div><span>React</span><i className="fas fa-square-full"></i><span>JavaScript</span><i className="fas fa-square-full"></i><span>HTML</span><i className="fas fa-square-full"></i><span>Sass</span></div>
                </div>
                <i className="fas fa-angle-double-down"></i>
            </section>
        )
    }
}