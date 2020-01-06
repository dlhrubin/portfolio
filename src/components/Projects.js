import React, {Component} from "react";
import projects from "../data.js";

export class Projects extends Component {
    render() {
        let projectCards = projects.map((proj, i) => {
            return (
                <div key={i} className="card">
                    <div className="image-container">
                        <a href={proj.live} target="_blank"><img src={proj.screencap} alt={proj.name}/></a>
                    </div>
                    <div className="info">
                        <h2>{proj.name}</h2>
                        <div className="details">
                            <p>{proj.summary}</p>
                            <span className="stack">STACK: </span><span className="tech">{proj.stack}</span>
                            <br></br>
                            <span className="links"><a href={proj.live} target="_blank">LIVE</a> | <a href={proj.code} target="_blank">CODE</a></span>
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