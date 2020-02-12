import React, {Component} from "react";

export class Landing extends Component {
    render() {
        return(
            <section id="landing">
                <div className="intro">
                    <h1>Hi, I'm Danielle Rubin</h1>
                    <p>I'm a bioinformatician-turned-developer building things with <span>React</span>, vanilla <span>JavaScript</span>, <span>Sass</span>, and <span>HTML</span>. I've also worked with <span>Python</span>, <span>bash</span>, and <span>R</span>. Thanks for stopping by! </p>
                </div>
                <i className="fas fa-angle-double-down"></i>
            </section>
        )
    }
}