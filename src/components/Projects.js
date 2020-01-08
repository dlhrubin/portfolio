import React, {Component} from "react";
import projects from "../data.js";

export class Projects extends Component {
    render() {
        let projectCards = projects.map((proj, i) => {
            let stack = proj.stack.map(word => <span key={word}>{word}</span>)
            return (
                <div key={i} className="card">
                    <div className="image-container">
                        <a href={proj.live} target="_blank" rel="noopener noreferrer"><img src={proj.screencap} alt={proj.name}/></a>
                    </div>
                    <div className="info">
                        <h3>{proj.name}</h3>
                        <div className="details">
                            <p>{proj.summary}</p>
                            <div>
                                <div className="tech">
                                    {stack}
                                </div>
                                <div className="links">
                                    <a className="live-link" href={proj.live} target="_blank" rel="noopener noreferrer">Live
                                        <i className="fas fa-desktop"></i>                                    </a>
                                    <a className="code-link" href={proj.code} target="_blank" rel="noopener noreferrer">Code
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
            <section id="projects">
                <h2>Projects</h2>
                <div>
                    {projectCards}
                </div>
            </section>
        )
    }
}