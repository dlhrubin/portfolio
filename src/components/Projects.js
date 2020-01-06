import React, {Component} from "react";
import projects from "../data.js";

export class Projects extends Component {
    render() {
        let projectCards = projects.map((proj, i) => {
            let stack = proj.stack.map(word => <span className="tech" key={word}>{word}</span>)
            return (
                <div key={i} className="card">
                    <div className="image-container">
                        <a href={proj.live} target="_blank"><img src={proj.screencap} alt={proj.name}/></a>
                    </div>
                    <div className="info">
                        <h2>{proj.name}</h2>
                        <div className="details">
                            <p>{proj.summary}</p>
                            <div>
                                {stack}
                                <br></br>
                                <div className="links">
                                    <a className="live-link" href={proj.live} target="_blank">Live
                                        <i className="fas fa-desktop"></i>                                    </a>
                                    <a className="code-link" href={proj.code} target="_blank">Code
                                        <i className="fas fa-code"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <section className="projects">
                {projectCards}
            </section>
        )
    }
}